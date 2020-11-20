import React from "react";
import styles from "./InvestorPageView.module.scss";
import FooterView from "../FooterView/FooterView";

import { ReactComponent as InvestmentIcon } from "../../assets/icons/investment-archive-icon.svg";

// import { Link } from "react-router-dom";

const InvestorPageView = () => {
  return (
    <>
      <article className={styles.investorPageWrapper}>
        <h1 className={styles.sectionTitle}>Tak budowaliśmy nasze doświadczenie</h1>
        <section className={styles.investmentWrapper}>
          <div className={styles.investmentDescriptionWrapper}>
            <div className={styles.investmentIconWrapper}>
              <InvestmentIcon className={styles.investemntIcon} />
              <h2 className={styles.investmentIconTitle}>kamienica słoneczna</h2>
            </div>
            <p className={styles.investmentDescription}>Nowoczesna kamienica w centrum miasta</p>
            <h3 className={styles.investmentParametersPrimary}>22 mieszkania</h3>
            <h4 className={styles.investmentParametersSecondary}>2 lokale usługowe</h4>
            <h3 className={styles.investmentParametersPrimary}>24 garaże podziemne</h3>
            <h4 className={styles.investmentParametersSecondary}>6 miejsc postojowych</h4>
          </div>
          <div className={styles.investmentImage}></div>
        </section>
        <section className={styles.investmentWrapper}>
          <div className={styles.investmentDescriptionWrapper}>
            <div className={styles.investmentIconWrapper}>
              <InvestmentIcon className={styles.investemntIcon} />
              <h2 className={styles.investmentIconTitle}>osiedle przy parku</h2>
            </div>
            <p className={styles.investmentDescription}>Kameralne osiedle położone w sąsiedztwie parku</p>
            <h3 className={styles.investmentParametersPrimary}>36 mieszkań</h3>
            <h4 className={styles.investmentParametersSecondary}>6 lokali usługowych</h4>
            <h3 className={styles.investmentParametersPrimary}>40 garaży podziemnych</h3>
            <h4 className={styles.investmentParametersSecondary}>10 miejsc postojowych</h4>
          </div>
          <div className={styles.investmentImage}></div>
        </section>
        <section className={styles.investmentWrapper}>
          <div className={styles.investmentDescriptionWrapper}>
            <div className={styles.investmentIconWrapper}>
              <InvestmentIcon className={styles.investemntIcon} />
              <h2 className={styles.investmentIconTitle}>zielona enklawa</h2>
            </div>
            <p className={styles.investmentDescription}>Nowoczesne osiedle w bezpośrednim sąsiedztwie lasów</p>
            <h3 className={styles.investmentParametersPrimary}>60 mieszkań</h3>
            <h4 className={styles.investmentParametersSecondary}>7 lokali usługowych</h4>
            <h3 className={styles.investmentParametersPrimary}>60 garażypodziemnych</h3>
            <h4 className={styles.investmentParametersSecondary}>16 miejsc postojowych</h4>
          </div>
          <div className={styles.investmentImage}></div>
        </section>
      </article>
      <FooterView />

      {/* <Link to="/">home</Link> */}
    </>
  );
};

export default InvestorPageView;
