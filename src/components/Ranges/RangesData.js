import flatsArray from "../../assets/flatsArray";

const minFloorValue = Math.min.apply(Math, flatsArray.map(flat => flat.floor));
const maxFloorValue = Math.max.apply(Math, flatsArray.map(flat => flat.floor));
export const floorRange =
  {
    minValue: minFloorValue,
    maxValue: maxFloorValue,
    value: {
      min: minFloorValue,
      max: maxFloorValue,
    },
    label: '',
    step: 1,
  };

const minRoomsValue = Math.min.apply(Math, flatsArray.map(flat => flat.rooms));
const maxRoomsValue = Math.max.apply(Math, flatsArray.map(flat => flat.rooms));
export const roomsRange =
  {
    minValue: minRoomsValue,
    maxValue: maxRoomsValue,
    value: {
      min: minRoomsValue,
      max: maxRoomsValue,
    },
    label: '',
    step: 1,
  };

const minAreaValue = Math.min.apply(Math, flatsArray.map(flat => flat.area));
const maxAreaValue = Math.max.apply(Math, flatsArray.map(flat => flat.area));
export const areaRange =
  {
    minValue: minAreaValue,
    maxValue: maxAreaValue,
    value: {
      min: minAreaValue,
      max: maxAreaValue,
    },
    label: 'm2',
    step: 1,
  };

const minPriceValue = Math.min.apply(Math, flatsArray.map(flat => flat.price));
const maxPriceValue = Math.max.apply(Math, flatsArray.map(flat => flat.price));
export const priceRange =
  {
    minValue: minPriceValue,
    maxValue: maxPriceValue,
    value: {
      min: minPriceValue,
      max: maxPriceValue,
    },
    label: 'zł',
    step: 25000,
  };

  export const numberFormat = (value) =>
  new Intl.NumberFormat('pl', {
    style: 'decimal',
  }).format(value);

export { minFloorValue, maxFloorValue, minAreaValue, maxAreaValue, minRoomsValue, maxRoomsValue, minPriceValue, maxPriceValue };