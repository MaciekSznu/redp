import React from "react";
import { Link } from "react-router-dom";
import styles from "./InvestmentView.module.scss";
import { ReactComponent as GreenHexagon } from "../../assets/helpers/hexagon-green.svg";
import { ReactComponent as FlatIcon } from "../../assets/icons/flat-icon.svg";
import { ReactComponent as AreaIcon } from "../../assets/icons/area-icon.svg";
import { ReactComponent as PriceIcon } from "../../assets/icons/price-icon.svg";
import { ReactComponent as MapIcon } from "../../assets/icons/map-icon.svg";
import { ReactComponent as InfrastructureIcon } from "../../assets/icons/infrastructure-icon.svg";
import { ReactComponent as LayoutIcon } from "../../assets/icons/layout-icon.svg";
import { ReactComponent as GarageIcon } from "../../assets/icons/garage-icon.svg";
import { ReactComponent as TreeIcon } from "../../assets/icons/tree-icon.svg";
import { ReactComponent as SecurityIcon } from "../../assets/icons/security-icon.svg";
import { ReactComponent as BicycleParkIcon } from "../../assets/icons/bicycle-park-icon.svg";
import { ReactComponent as ServicesIcon } from "../../assets/icons/services-icon.svg";
import { ReactComponent as CarChargeIcon } from "../../assets/icons/car-charge-icon.svg";
import { ReactComponent as HexagonDot } from "../../assets/icons/hexagon-dot.svg";

const InvestmentView = () => {
  return (
    <>
      <div className={styles.InvestmentContainer} id="inwestycja">
        <h2 className={styles.InvestmentTitle}>Osiedle Koralowa II</h2>
        <h3 className={styles.InvestmentSubTitle}>Bliskie Tobie i Twoim Potrzebom</h3>
        <p className={styles.InvestmentParagraph}>
          W ramach projektu stworzyliśmy <strong>20 nowoczesnych mieszkań</strong> o przemyślanym układzie, który
          pozwolił optymalnie wykorzystać przestrzeń użytkową. Wszystkie lokale na parterze posiadają dostęp do własnych
          ogródków. Pod budynkami znajdują się garaże podziemne.
        </p>
        <div className={styles.InvestmentIconsContainer}>
          <div className={styles.IconsWrapper}>
            <FlatIcon className={styles.Icon} />
            <p className={styles.IconTitle}>mieszkania</p>
            <p className={styles.IconSubTitle}>M2/M3/M4</p>
          </div>
          <div className={styles.IconsWrapper}>
            <AreaIcon className={styles.Icon} />
            <p className={styles.IconTitle}>metraż</p>
            <p className={styles.IconSubTitle}>
              od 50 do 84 m<sup>2</sup>
            </p>
          </div>
          <div className={styles.IconsWrapper}>
            <PriceIcon className={styles.Icon} />
            <p className={styles.IconTitle}>ceny</p>
            <p className={styles.IconSubTitle}>od 350 do 870 tyś. zł</p>
          </div>
        </div>
        <h3 className={styles.InvestmentSectionTitle}>dlaczego warto wybrać naszą inwestycję</h3>
        <p className={styles.InvestmentParagraph}>
          <strong>KORALOWA II</strong> to kameralna, nowoczesna inwestycja zlokalizowana w jednej z najbardziej
          atrakcyjnych dzielnic Krakowa. Dobra lokalizacja i rozbudowana infrastruktura zapewnią mieszkańcom komfort i
          spokój.
        </p>
        <div className={styles.InvestmentIconsFullWidthContainer}>
          <div className={styles.IconWrapper}>
            <div className={styles.Icon}>
              <GreenHexagon className={styles.IconBackground} />
              <MapIcon className={styles.IconImage} />
            </div>
            <p className={styles.IconTitle}>dobra lokalizacja</p>
          </div>
          <div className={styles.IconWrapper}>
            <div className={styles.Icon}>
              <GreenHexagon className={styles.IconBackground} />
              <InfrastructureIcon className={styles.IconImage} />
            </div>
            <p className={styles.IconTitle}>przyjazna infrastruktura</p>
          </div>
          <div className={styles.IconWrapper}>
            <div className={styles.Icon}>
              <GreenHexagon className={styles.IconBackground} />
              <LayoutIcon className={styles.IconImage} />
            </div>
            <p className={styles.IconTitle}>przemyślany układ</p>
          </div>
        </div>
        <h3 className={styles.InvestmentSectionTitle}>ZAPEWNIAMY KOMPLEKSOWE WYKOŃCZENIE NASZYCH INWESTYCJI</h3>
        <p className={styles.InvestmentParagraph}>
          Skupiamy się na funkcjonalności tworzonych projektów, zapewniając najwyższą jakość oraz standard wykończeń.
          Dążymy do tworzenia spójnej, przemyślanej i przyjaznej przestrzeni odpowiadającej na wszelkie potrzeby
          wymagających klientów, dlatego zawsze dbamy także o kompleksowe wykończenie naszych inwestycji.
        </p>
        <div className={styles.InvestmentIconsContainerSecondary}>
          <div className={styles.IconsWrapper}>
            <GarageIcon className={styles.Icon} />
            <p className={styles.IconTitle}>garaże i miejsca postojowe</p>
          </div>
          <div className={styles.IconsWrapper}>
            <TreeIcon className={styles.Icon} />
            <p className={styles.IconTitle}>obszary zieleni</p>
          </div>
          <div className={styles.IconsWrapper}>
            <SecurityIcon className={styles.Icon} />
            <p className={styles.IconTitle}>systemy zabezpieczeń</p>
          </div>
          <div className={styles.IconsWrapper}>
            <BicycleParkIcon className={styles.Icon} />
            <p className={styles.IconTitle}>miejsce na rowery</p>
          </div>
          <div className={styles.IconsWrapper}>
            <ServicesIcon className={styles.Icon} />
            <p className={styles.IconTitle}>lokale usługowe</p>
          </div>
          <div className={styles.IconsWrapper}>
            <CarChargeIcon className={styles.Icon} />
            <p className={styles.IconTitle}>stacje ładowania</p>
          </div>
        </div>
        <h3 className={styles.InvestmentSubTitle}>Nasz harmonogram</h3>
        <p className={styles.InvestmentParagraph}>
          Kiedy startujemy? Na kiedy planujemy przedsprzedaż oraz odbiór mieszkań? Zapoznaj się ze szczegółowym planem
          inwestycji, żeby lepiej zaplanować tą ważną decyzję.
        </p>
        <div className={styles.ScheduleIconsContainer}>
          <div className={styles.IconsWrapper}>
            <p className={styles.IconTitle}>przedsprzedaż</p>
            <p className={styles.IconSubTitle}>Styczeń 2021</p>
            <div className={styles.HexagonWrapper}>
              <HexagonDot className={styles.Icon} />
            </div>
          </div>
          <div className={styles.IconsWrapper}>
            <p className={styles.IconTitle}>start inwestycji</p>
            <p className={styles.IconSubTitle}>Marzec 2021</p>
            <div className={styles.HexagonWrapper}>
              <HexagonDot className={styles.Icon} />
            </div>{" "}
          </div>
          <div className={styles.IconsWrapper}>
            <p className={styles.IconTitle}>odbiór mieszkań</p>
            <p className={styles.IconSubTitle}>Czerwiec 2022</p>
            <div className={styles.HexagonWrapper}>
              <HexagonDot className={styles.Icon} />
            </div>
          </div>
        </div>
        <p className={styles.InvestmentParagraph}>
          Chcesz poznać więcej szczegółów naszej inwestycji? Zapoznaj się z przewidywanem planem realizacji oraz
          przeczytaj najnowsze aktualności.
        </p>
        <Link to="/schedule">
          <button className={styles.ScheduleButton}>zobacz harmonogram inwestycji</button>
        </Link>
      </div>
    </>
  );
};

export default InvestmentView;
