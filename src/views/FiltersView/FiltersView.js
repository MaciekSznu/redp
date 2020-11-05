import React from "react";
import styles from "./FiltersView.module.scss";
import RangeSearchInputs from "../FiltersView/SearchInputs/RangeSearchInputs";
import SearchResultsTable from "../../components/SearchResults/SearchResultsTable";
import { floorRange, roomsRange, areaRange, priceRange } from "../../components/Ranges/RangesData";

// import FlatsSlider from '../../components/Sliders/FlatsSlider';
// import Fade from 'react-reveal/Fade';
// import GraphicSearch from '../../components/GraphicSearch/GraphicSearch';

class FiltersView extends React.Component {
  state = {
    filters: {
      selectedFloors: floorRange,
      selectedRooms: roomsRange,
      selectedArea: areaRange,
      selectedPrice: priceRange,
    },
  };

  onFloorChange = (value) => {
    const selectedFloors = value.floor;
    this.setState({ filters: { ...this.state.filters, selectedFloors } });
  };

  onRoomsChange = (value) => {
    const selectedRooms = value.rooms;
    this.setState({ filters: { ...this.state.filters, selectedRooms } });
  };

  onAreaChange = (value) => {
    const selectedArea = value.area;
    this.setState({ filters: { ...this.state.filters, selectedArea } });
  };

  onPriceChange = (value) => {
    const selectedPrice = value.price;
    this.setState({ filters: { ...this.state.filters, selectedPrice } });
  };

  render() {
    return (
      <div className={styles.FiltersViewWrapper} id="mieszkania">
        <div className={styles.FiltersTitleWrapper}>
          <h3 className={styles.FiltersTitle}>filtruj mieszkania</h3>
        </div>
        <div className={styles.FiltersWrapper}>
          <RangeSearchInputs
            onFloorChange={this.onFloorChange}
            onRoomsChange={this.onRoomsChange}
            onAreaChange={this.onAreaChange}
            onPriceChange={this.onPriceChange}
            filters={this.state.filters}
          />
        </div>
        <SearchResultsTable filters={this.state.filters} />
      </div>
    );
  }
}

export default FiltersView;
