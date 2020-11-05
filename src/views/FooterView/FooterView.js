import React from "react";
import styles from "./FooterView.module.scss";
import { ReactComponent as FooterHexagons } from "../../assets/helpers/footer-hexagons.svg";
import { ReactComponent as FooterPattern } from "../../assets/helpers/footer-pattern.svg";
import { ReactComponent as LogoSubstitute } from "../../assets/helpers/hexagon-status.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook-icon.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter-icon.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram-icon.svg";

const FooterView = () => {
  return (
    <>
      <div className={styles.FooterContainer}>
        <div className={styles.FooterContentFullWidthContainer}>
          <section className={styles.FooterLogo}>
            <LogoSubstitute className={styles.LogoSubstitute} />
          </section>
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
          <div className={styles.SocialLinks}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/" className={styles.Facebook}>
              <Facebook className={styles.Icon}/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/" className={styles.Twitter}>
              <Twitter className={styles.Icon}/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/" className={styles.Instagram}>
              <Instagram className={styles.Icon}/>
            </a>
          </div>
          <p className={styles.Copyright01}>Copyright 2020 MJEZAK & BEEONTHEWEB</p>
          <p className={styles.Copyright03}>Regulamin i polityka prywatności</p>
          <FooterPattern className={styles.FooterPatternTop} />
          <FooterPattern className={styles.FooterPatternBottom} />
        </div>
      </div>
    </>
  );
};

export default FooterView;
