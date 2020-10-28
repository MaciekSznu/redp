import React from "react";
import styles from "./FooterView.module.scss";
import { ReactComponent as FooterHexagons } from "../../assets/helpers/footer-hexagons.svg";

const FooterView = () => {
  return (
    <>
      <div className={styles.FooterContainer}>
        <div className={styles.FooterContentFullWidthContainer}>
          <div className={styles.ContentWrapper}>
            <div className={styles.AdressWrapper}>
              <p className={styles.AdressBold}>ul. Lipska 20/40</p>
              <p className={styles.AdressStandard}>30-412 Kraków</p>
              <p className={styles.AdressBold}>(12) 214 84 30</p>
              <p className={styles.AdressStandard}>office@office.pl</p>
            </div>
          </div>
          <div className={styles.ContentWrapper}>
            <FooterHexagons />
          </div>
          <div className={styles.ContentWrapper}>
            <div className={styles.LinksWrapper}>
              <p className={styles.Link}>inwestycja</p>
              <p className={styles.Link}>lokalizacja</p>
              <p className={styles.Link}>mieszkania</p>
              <p className={styles.Link}>inwestor</p>
            </div>
          </div>
          <p className={styles.Copyright01}>Copyright 2020 MJEZAK & BEEONTHEWEB</p>
          <p className={styles.Copyright03}>Regulamin i polityka prywatności</p>
        </div>
      </div>
    </>
  );
};

export default FooterView;
