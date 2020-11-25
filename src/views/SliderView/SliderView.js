import React, { useState } from "react";
import styles from "./SliderView.module.scss";
import "../../transitions.css";
import InvestmentSlider from "../../components/Slider/InvestmentSlider";
import LocalizationSlider from "../../components/Slider/LocalizationSlider";
import InteriorSlider from "../../components/Slider/InteriorSlider";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const SliderView = () => {
  const [slider, setSlider] = useState("investment");
  const [visible, setVisible] = useState(true);

  const selectedSlider = () => {
    if (slider === "investment") {
      return <InvestmentSlider />;
    } else if (slider === "localization") {
      return <LocalizationSlider />;
    } else {
      return <InteriorSlider />;
    }
  };

  return (
    <>
      <div className={styles.SliderContainer}>
        <div className={styles.TopContentWrapper}>
          <h2 className={styles.SliderTitle}>Poznaj inwestycję KORALOWA II</h2>
          <div className={styles.SliderTabsContainer}>
            <p
              className={slider === "investment" ? styles.SliderTabNameActive : styles.SliderTabName}
              onClick={() => {
                setSlider("investment");
                setVisible(!visible);
              }}>
              osiedle
            </p>
            <p
              className={slider === "localization" ? styles.SliderTabNameActive : styles.SliderTabName}
              onClick={() => {
                setSlider("localization");
                setVisible(!visible);
              }}>
              okolica
            </p>
            <p
              className={slider === "interior" ? styles.SliderTabNameActive : styles.SliderTabName}
              onClick={() => {
                setSlider("interior");
                setVisible(!visible);
              }}>
              wnętrza
            </p>
          </div>
        </div>
        <TransitionGroup className={styles.slider}>
          <CSSTransition in={visible} appear={true} timeout={1000} classNames="fade" key={slider}>
            {selectedSlider()}
          </CSSTransition>
        </TransitionGroup>
        <div className={styles.BotoomContentWrapper}>
          <p className={styles.SliderParagraph}>
            Nasza inwestycja idealnie sprawdzi się dla miłośników spokojnej, rodzinnej atmosfery, a także wszystkich
            ceniących sobie wygodę, estetykę i komfort.
          </p>
          <button className={styles.SliderButton}>szczegóły oferty</button>
        </div>
      </div>
    </>
  );
};

export default SliderView;
