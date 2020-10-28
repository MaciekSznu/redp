import React from 'react';
import { roomsRange } from '../../../components/Ranges/RangesData';
import InputRange from 'react-input-range';
import './RangeSearchInputs.scss';

class RoomsRangeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = roomsRange;
  }

  render() {
    return (
      <InputRange minValue={this.state.minValue} maxValue={this.state.maxValue} value={this.state.value} step={this.state.step} onChange={value => this.setState({value})} onChangeComplete={value => this.props.onRoomsChange({rooms: value})} allowSameValues={true} />
    );
  }
}

export default RoomsRangeContainer;