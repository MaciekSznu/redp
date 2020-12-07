import React from "react";
import { floorRange } from "../../../components/Ranges/RangesData";
import InputRange from "react-input-range";
import "./RangeSearchInputs.scss";

class FloorRangeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = floorRange;
  }

  render() {
    return (
      <InputRange
        minValue={this.state.minValue}
        maxValue={this.state.maxValue}
        value={this.state.value}
        step={this.state.step}
        onChange={(value) => {
          this.setState({ value });
          this.props.onFloorChange({ floor: value });
        }}
        allowSameValues={true}
      />
    );
  }
}

export default FloorRangeContainer;
