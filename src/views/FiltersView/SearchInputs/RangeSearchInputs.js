import React from "react";
import styles from "./RangeSearchInputs.module.scss";
import FloorRangeContainer from "./FloorRangeInput";
import RoomsRangeContainer from "./RoomsRangeInput";
import AreaRangeContainer from "./AreaRangeInput";
import PriceRangeContainer from "./PriceRangeInput";
class RangeSearchInputs extends React.Component {
  render(props) {
    const filters = this.props.filters;
    const formatPrice = (price) => {
      if (price !== undefined) {
        return price.toLocaleString();
      }
    };
    return (
      <div className={styles.FiltersWrapper}>
        <div className={styles.FilterFloors}>
          <h3 className={styles.FilterTitle}>Piętro</h3>
          <div className={styles.FilterValuesWrapper}>
            <span className={styles.FilterValue}>
              od {filters.selectedFloors.minValue || filters.selectedFloors.min || "0"}
            </span>
            <span className={styles.FilterValue}>
              do {filters.selectedFloors.maxValue || filters.selectedFloors.max}
            </span>
          </div>
          <FloorRangeContainer onFloorChange={this.props.onFloorChange} />
        </div>
        <div className={styles.FilterRooms}>
          <h3 className={styles.FilterTitle}>Pokoje</h3>
          <div className={styles.FilterValuesWrapper}>
            <span className={styles.FilterValue}>od {filters.selectedRooms.minValue || filters.selectedRooms.min}</span>
            <span className={styles.FilterValue}>do {filters.selectedRooms.maxValue || filters.selectedRooms.max}</span>
          </div>
          <RoomsRangeContainer onRoomsChange={this.props.onRoomsChange} />
        </div>
        <div className={styles.FilterArea}>
          <h3 className={styles.FilterTitle}>Metraż</h3>
          <div className={styles.FilterValuesWrapper}>
            <span className={styles.FilterValue}>
              od {filters.selectedArea.minValue || filters.selectedArea.min} m<sup>2</sup>
            </span>
            <span className={styles.FilterValue}>
              do {filters.selectedArea.maxValue || filters.selectedArea.max} m<sup>2</sup>
            </span>
          </div>
          <AreaRangeContainer onAreaChange={this.props.onAreaChange} />
        </div>
        <div className={styles.FilterPrice}>
          <h3 className={styles.FilterTitle}>Cena</h3>
          <div className={styles.FilterValuesWrapper}>
            <span className={styles.FilterValue}>
              od {formatPrice(filters.selectedPrice.minValue) || formatPrice(filters.selectedPrice.min)} zł
            </span>
            <span className={styles.FilterValue}>
              do {formatPrice(filters.selectedPrice.maxValue) || formatPrice(filters.selectedPrice.max)} zł
            </span>
          </div>
          <PriceRangeContainer onPriceChange={this.props.onPriceChange} />
        </div>
      </div>
    );
  }
}

export default RangeSearchInputs;
