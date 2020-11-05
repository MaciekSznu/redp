import React from "react";
import styles from "./SliderView.module.scss";
import { ReactComponent as SlidePrev } from "../../assets/helpers/slide-prev.svg";
import { ReactComponent as SlideNext } from "../../assets/helpers/slide-next.svg";


const SliderView = () => {
  return (
    <>
      {/* <div className={styles.SliderLeftContainer}></div> */}
      <div className={styles.SliderContainer}>
        <div className={styles.TopContentWrapper}>
          <h2 className={styles.SliderTitle}>Poznaj inwestycję KORALOWA II</h2>
          <div className={styles.SliderTabsContainer}>
            <p className={styles.SliderTabName}>osiedle</p>
            <p className={styles.SliderTabName}>okolica</p>
            <p className={styles.SliderTabName}>wnętrza</p>
          </div>
        </div>
        <div className={styles.Slider}>
          <SlidePrev className={styles.SlidePrev}/>
          <SlideNext className={styles.SlideNext}/>
        </div>
        <div className={styles.BotoomContentWrapper}>
          <p className={styles.SliderParagraph}>
            Nasza inwestycja idealnie sprawdzi się dla miłośników spokojnej, rodzinnej atmosfery, a także wszystkich
            ceniących sobie wygodę, estetykę i komfort.
          </p>
          <button className={styles.SliderButton}>szczegóły oferty</button>
        </div>
      </div>
      {/* <div className={styles.SliderRightContainer}></div> */}
    </>
  );
};

export default SliderView;
