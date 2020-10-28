import React from "react";
import styles from "./FlatsView.module.scss";
import { ReactComponent as HexagonStatus } from "../../assets/helpers/hexagon-status.svg";
import GraphicSearch from "../../components/GraphicSearch/GraphicSearch";
import RangeSearchInputs from "../../components/SearchInputs/RangeSearchInputs";
import SearchResultsTable from "../../components/SearchResults/SearchResultsTable";

const FlatsView = () => {
  return (
    <>
      <div className={styles.FlatsContainer}>
        <div className={styles.ContentWrapperTop}>
          <h2 className={styles.FlatsTitle}>Wybierz swoje mieszkanie</h2>
          <p className={styles.FlatsParagraph}>
            Wybierz mieszkanie za pomocą wizualizacji lub skorzystaj z wyszukiwania z wykorzystaniem specjalnych
            filtrów. Znajdź z nami swoje wymarzone mieszkanie w kilka chwil.
          </p>
        </div>
        <div className={styles.GraphicSearchTitleWrapper}>
          <h3 className={styles.GraphicSearchTitle}>wyszukiwanie graficzne</h3>
        </div>
        <GraphicSearch />
        <div className={styles.ViewDescriptionWrapper}>
          <div className={styles.ViewDescriptionBox}>
            <HexagonStatus className={styles.HexagonAvaliable} />
            <h3 className={styles.Title}>mieszkanie</h3>
            <p className={styles.Status}>dostępne</p>
          </div>
          <div className={styles.ViewDescriptionBox}>
            <HexagonStatus className={styles.HexagonReserved} />
            <h3 className={styles.Title}>mieszkanie</h3>
            <p className={styles.Status}>zarezerwowane</p>
          </div>
          <div className={styles.ViewDescriptionBox}>
            <HexagonStatus className={styles.HexagonSold} />
            <h3 className={styles.Title}>mieszkanie</h3>
            <p className={styles.Status}>sprzedane</p>
          </div>
        </div>
        <div className={styles.FiltersTitleWrapper}>
          <h3 className={styles.FiltersTitle}>filtruj mieszkania</h3>
        </div>
        <RangeSearchInputs />
        <SearchResultsTable />
      </div>
    </>
  );
};

export default FlatsView;
