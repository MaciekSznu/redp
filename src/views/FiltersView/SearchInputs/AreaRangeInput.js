import React from "react";
import { areaRange, numberFormat } from "../../../components/Ranges/RangesData";
import InputRange from "react-input-range";
import "./RangeSearchInputs.scss";

class AreaRangeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = areaRange;
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
          this.props.onAreaChange({ area: value });
        }}
        formatLabel={(value) => `${numberFormat(value)} ${this.state.label}`}
      />
    );
  }
}

export default AreaRangeContainer;
