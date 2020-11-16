import React, { useState } from "react";
import styles from "./SliderView.module.scss";
import InvestmentSlider from "../../components/Slider/InvestmentSlider";
import LocalizationSlider from "../../components/Slider/LocalizationSlider";
import InteriorSlider from "../../components/Slider/InteriorSlider";

const SliderView = () => {
  const [slider, setSlider] = useState("investment");

  return (
    <>
      <div className={styles.SliderContainer}>
        <div className={styles.TopContentWrapper}>
          <h2 className={styles.SliderTitle}>Poznaj inwestycję KORALOWA II</h2>
          <div className={styles.SliderTabsContainer}>
            <p
              className={slider === "investment" ? styles.SliderTabNameActive : styles.SliderTabName}
              onClick={() => setSlider("investment")}>
              osiedle
            </p>
            <p
              className={slider === "localization" ? styles.SliderTabNameActive : styles.SliderTabName}
              onClick={() => setSlider("localization")}>
              okolica
            </p>
            <p
              className={slider === "interior" ? styles.SliderTabNameActive : styles.SliderTabName}
              onClick={() => setSlider("interior")}>
              wnętrza
            </p>
          </div>
        </div>
        <div className={styles.Slider}>
          {slider === "investment" && <InvestmentSlider />}
          {slider === "localization" && <LocalizationSlider />}
          {slider === "interior" && <InteriorSlider />}
        </div>
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
