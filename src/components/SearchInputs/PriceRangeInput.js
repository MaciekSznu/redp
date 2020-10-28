import React from 'react';
import { priceRange, numberFormat } from '../Ranges/RangesData';
import InputRange from 'react-input-range';
import './RangeSearchInputs.scss';

class PriceRangeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = priceRange;
  }

  // wywoływana onChangeComplete funkcja onRangeChange z parametrem zwracająca objekt ({price: value})
  render() {
    return (
      <InputRange minValue={this.state.minValue} maxValue={this.state.maxValue} value={this.state.value} step={this.state.step} onChange={value => this.setState({value})} onChangeComplete={value => this.props.onPriceChange({price: value})} formatLabel={value => `${numberFormat(value)} ${this.state.label}`} />
    );
  }
}

export default PriceRangeContainer;