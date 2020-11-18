import React from "react";
import { Link } from "react-router-dom";
import styles from "./CompanyView.module.scss";
import { ReactComponent as HexagonSecondary } from "../../assets/icons/hexagon-secondary.svg";
import { ReactComponent as HexagonsMask } from "../../assets/helpers/hexagons-mask.svg";
import { ReactComponent as HexagonsMaskWhite } from "../../assets/helpers/hexagons-mask-white.svg";
import { ReactComponent as QuaotationMark } from "../../assets/helpers/quotation-mark.svg";

const CompanyView = () => {
  return (
    <>
      <div className={styles.CompanyContainer} id="inwestor">
        <div className={styles.ContentWrapperTop}>
          <h2 className={styles.CompanyTitle}>Deweloper warty zaufania</h2>
        </div>
        <div className={styles.FullWidthBannerTop}>
          <div className={styles.BannerLeftContent}></div>
          <div className={styles.TextWrapper}>
            <h3 className={styles.LeadText}>
              Żyj z pasją, <span>mieszkaj</span> z pasją.
            </h3>
            <p className={styles.AdditionalText}>lider z wizją i doświadczeniem</p>
          </div>
          <HexagonsMaskWhite className={styles.CompanyHexagons} />
          <div className={styles.BannerRightContent}></div>
        </div>
        <div className={styles.ContentWrapperMid}>
          <h3 className={styles.CompanySubTitle}>nasze doświadczenie</h3>
          <p className={styles.CompanyParagraph}>
            Funkcjonujemy na rynku branży budowlanej już od 2001 roku. Posiadamy liczne pomyślnie ukończone inwestycje w
            największych miastach Polski. Nasza działalność ukierunkowana jest na realizację projektów mieszkaniowych.
            Nasi wykwalifikowani pracownicy gwarantują najwyższą jakość oraz terminowość realizowanych przedsięwzięć.
          </p>
          <div className={styles.CompanyIconsContainer}>
            <div className={styles.IconWrapper}>
              <div className={styles.Icon}>
                <HexagonSecondary className={styles.IconBackground} />
                <p className={styles.IconNumber}>19</p>
              </div>
              <p className={styles.IconTitle}>lat na rynku</p>
            </div>
            <div className={styles.IconWrapper}>
              <div className={styles.Icon}>
                <HexagonSecondary className={styles.IconBackground} />
                <p className={styles.IconNumber}>23</p>
              </div>
              <p className={styles.IconTitle}>ukończone inwestycje</p>
            </div>
            <div className={styles.IconWrapper}>
              <div className={styles.Icon}>
                <HexagonSecondary className={styles.IconBackground} />
                <p className={styles.IconNumber}>637</p>
              </div>
              <p className={styles.IconTitle}>sprzedanych mieszkań</p>
            </div>
          </div>
          <h3 className={styles.CompanySubTitle}>deweloper z pasją</h3>
          <p className={styles.CompanyParagraph}>
            Każda nasza inwestycja powstaje z pasji do tworzenia funkcjonalnej i pełnej pozytywnych emocji przestrzeni.
            Wspieramy innowacje i kreujemy ergonomiczne rozwiązania.
          </p>
          <div className={styles.CompanyImageWrapper}>
            <HexagonsMask className={styles.CompanyHexagons} />
          </div>
        </div>
        <div className={styles.FullWidthBannerBottom}>
          <div className={styles.BannerLeftContent}></div>
          <QuaotationMark className={styles.CompanyQuotationsTop} />
          <div className={styles.TextWrapper}>
            <p className={styles.AdditionalText}>
              Wierzymy, że architektura to niekończący się splot inspiracji i piękna. To pasja nieustannego tworzenia
              dla ludzi w kontekście czasu, miejsca, przyrody i kultury.
            </p>
          </div>
          <QuaotationMark className={styles.CompanyQuotationsBottom} />
          <div className={styles.BannerRightContent}></div>
        </div>
        <div className={styles.ContentWrapperBottom}>
          <p className={styles.CompanyParagraph}>
            Finalny efekt naszych inwestyacji to połączenie doświadczenia, pasji i zaangażowania. To wynik
            profesjonalnej analizy i wieloetapowych przygotowań, które pozwalają nam tworzyć przemyślaną wizję.
          </p>
          <Link to="/investor">
            <button className={styles.CompanyButton}>poznaj nasze inwestycje</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CompanyView;
