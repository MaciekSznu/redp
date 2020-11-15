import React from "react";
import { ReactComponent as SliderArrow } from "../../assets/helpers/slide-prev.svg";

const SliderButton = ({ className, to, onClick }) => <SliderArrow onClick={onClick} className={className} to={to} />;

export default SliderButton;
