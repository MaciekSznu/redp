import React from "react";
import flatsArray from "../../assets/flatsArray";
import {
  minFloorValue,
  maxFloorValue,
  minAreaValue,
  maxAreaValue,
  minRoomsValue,
  maxRoomsValue,
  minPriceValue,
  maxPriceValue,
} from "../Ranges/RangesData";
import { ReactComponent as LoopIcon } from "../../assets/icons/loop-icon.svg";
import Pagination from "../Pagination/Pagination";
import styles from "./SearchResults.module.scss";

class SearchResultsTable extends React.Component {
  state = {
    flats: flatsArray,
    width: 0,
    height: 0,
    page: 1,
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  isBalconyOrTerrace = (item) => {
    return item === true ? "\u2022" : "";
  };

  filterFlatsArray(props) {
    // console.log(this.props);
    return this.state.flats.filter((el) => {
      return (
        el.floor <=
          (this.props.filters.selectedFloors.max !== undefined
            ? this.props.filters.selectedFloors.max
            : maxFloorValue) &&
        el.floor >=
          (this.props.filters.selectedFloors.min !== undefined
            ? this.props.filters.selectedFloors.min
            : minFloorValue) &&
        el.rooms <=
          (this.props.filters.selectedRooms.max !== undefined ? this.props.filters.selectedRooms.max : maxRoomsValue) &&
        el.rooms >=
          (this.props.filters.selectedRooms.min !== undefined ? this.props.filters.selectedRooms.min : minRoomsValue) &&
        el.area <=
          (this.props.filters.selectedArea.max !== undefined ? this.props.filters.selectedArea.max : maxAreaValue) &&
        el.area >=
          (this.props.filters.selectedArea.min !== undefined ? this.props.filters.selectedArea.min : minAreaValue) &&
        el.price <=
          (this.props.filters.selectedPrice.max !== undefined ? this.props.filters.selectedPrice.max : maxPriceValue) &&
        el.price >=
          (this.props.filters.selectedPrice.min !== undefined ? this.props.filters.selectedPrice.min : minPriceValue) &&
        el.balcony !== "" &&
        el.terrace !== "" &&
        el.status === "for sale"
      );
    });
  }

  renderSearchResults() {
    return this.filterFlatsArray().map((flat) => {
      const { buildingNumber, flatNumber, floor, rooms, area, balcony, terrace, price, status, chart } = flat;
      if (this.state.width >= 768) {
        return (
          <>
            <td>{buildingNumber}</td>
            <td>{flatNumber}</td>
            <td>{floor}</td>
            <td>{rooms}</td>
            <td>
              {area}
              {" m"}
              <sup>{"2"}</sup>
            </td>
            {this.state.width >= 930 && <td>{this.isBalconyOrTerrace(balcony)}</td>}
            {this.state.width >= 930 && <td>{this.isBalconyOrTerrace(terrace)}</td>}
            <td>
              {price}
              {" zł"}
            </td>
            {this.state.width >= 930 && <td>{status}</td>}
            <td>{chart}</td>
          </>
        );
      } else {
        return (
          <>
            <div className={styles.FlatBoxChapter}>
              <div className={styles.FlatBoxText}>
                <h3 className={styles.FlatBoxHeader}>
                  B{buildingNumber}/piętro {floor}
                </h3>
                <p className={styles.FlatBoxParagraph}>Mieszkanie nr {flatNumber}</p>
              </div>
              <div className={styles.FlatBoxText}>
                <h3 className={styles.FlatBoxHeader}>m{rooms}</h3>
                <p className={styles.FlatBoxParagraph}>
                  {area} m<sup>2</sup>
                </p>
              </div>
            </div>
            <div className={styles.FlatBoxChapter}>
              <div className={styles.FlatBoxText}>
                <h3 className={styles.FlatBoxHeader}>{price} zł</h3>
                <p className={styles.FlatBoxParagraph}>{status}</p>
              </div>
              <div className={styles.FlatBoxIcon}>
                <LoopIcon />
              </div>
            </div>
          </>
        );
      }
    });
  }

  renderSearchResultsHeader() {
    const header =
      this.state.width >= 930
        ? {
            buildingNumber: "budynek",
            flatNumber: "mieszkanie",
            floor: "piętro",
            rooms: "pokoje",
            area: "powierzchnia",
            balcony: "balkon",
            terrace: "taras",
            price: "cena",
            status: "status",
            chart: "karta",
          }
        : {
            buildingNumber: "budynek",
            flatNumber: "mieszkanie",
            floor: "piętro",
            rooms: "pokoje",
            area: "powierzchnia",
            price: "cena",
            chart: "karta",
          };

    const headerValues = Object.values(header);
    return headerValues.map((value, index) => {
      return <th key={index}>{value.toUpperCase()}</th>;
    });
  }

  render() {
    const numberOfflats = this.filterFlatsArray().length;
    const perPage = this.state.width >= 768 ? 10 : 5;
    const pages = Math.ceil(numberOfflats / perPage);
    const from = (this.state.page - 1) * perPage;
    const to = this.state.page * perPage;
    const flats = this.renderSearchResults();

    const flatsToShow = flats.slice(from, to).map((item, index) => {
      if (this.state.width >= 768) {
        return (
          <tr className={styles.searchResultTableRow} key={index}>
            {item}
          </tr>
        );
      } else {
        return (
          <div className={styles.FlatBox} key={index}>
            {item}
          </div>
        );
      }
    });

    return (
      <>
        <div className={styles.searchResultsTableWrapper}>
          {this.state.width >= 768 ? (
            <table className={styles.searchResultTable}>
              <tbody>
                <tr className={styles.searchResultTableHeader}>{this.renderSearchResultsHeader()}</tr>
                {flatsToShow}
              </tbody>
            </table>
          ) : (
            <>
              <h3 className={styles.searchResultsTitle}>Wybrane dla Ciebie</h3>
              <p className={styles.searchResultsText}>
                <span>({numberOfflats})</span> dostępnych mieszkań</p>
              {flatsToShow}
            </>
          )}
        </div>
        <Pagination
          pages={pages}
          onPageChange={(page) => {
            this.setState({ page: page });
          }}
        />
      </>
    );
  }
}

export default SearchResultsTable;
