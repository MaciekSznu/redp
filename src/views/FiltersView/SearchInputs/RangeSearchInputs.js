import React from "react";
import styles from "./RangeSearchInputs.module.scss";
import FloorRangeContainer from "./FloorRangeInput";
import RoomsRangeContainer from "./RoomsRangeInput";
import AreaRangeContainer from "./AreaRangeInput";
import PriceRangeContainer from "./PriceRangeInput";

// dodane do przechnięcia props.onRangeChange
const RangeSearchInputs = (props) => (
  <div className={styles.FiltersWrapper}>
    <div className={styles.FilterFloors}>
    <h3 className={styles.FilterTitle}>Piętro</h3>
    <FloorRangeContainer onFloorChange = {props.onFloorChange} />
    </div>
    <div className={styles.FilterRooms}>
    <h3 className={styles.FilterTitle}>Pokoje</h3>
    <RoomsRangeContainer onRoomsChange = {props.onRoomsChange} />
    </div>
    <div className={styles.FilterArea}>
    <h3 className={styles.FilterTitle}>Metraż</h3>
    <AreaRangeContainer onAreaChange = {props.onAreaChange} />
    </div>
    <div className={styles.FilterPrice}>
    <h3 className={styles.FilterTitle}>Cena</h3>
    <PriceRangeContainer onPriceChange = {props.onPriceChange} />
    </div>
  </div>
);

export default RangeSearchInputs;