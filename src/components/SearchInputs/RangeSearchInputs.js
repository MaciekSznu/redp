import React from "react";
import styles from "./RangeSearchInputs.module.scss";
import FloorRangeContainer from "./FloorRangeInput";
import RoomsRangeContainer from "./RoomsRangeInput";
import AreaRangeContainer from "./AreaRangeInput";
import PriceRangeContainer from "./PriceRangeInput";

const RangeSearchInputs = (props) => (
  <div className={styles.rangesWrapper}>
    <div className={styles.rangesItem01}>
      <h3 className={styles.rangesTitle}>Piętro</h3>
      <FloorRangeContainer onFloorChange={props.onFloorChange} />
    </div>
    <div className={styles.rangesItem02}>
      <h3 className={styles.rangesTitle}>Pokoje</h3>
      <RoomsRangeContainer onRoomsChange={props.onRoomsChange} />
    </div>
    <div className={styles.rangesItem03}>
      <h3 className={styles.rangesTitle}>Powierzchnia</h3>
      <AreaRangeContainer onAreaChange={props.onAreaChange} />
    </div>
    <div className={styles.rangesItem04}>
      <h3 className={styles.rangesTitle}>Cena</h3>
      <PriceRangeContainer onPriceChange={props.onPriceChange} />
    </div>
  </div>
);

export default RangeSearchInputs;
