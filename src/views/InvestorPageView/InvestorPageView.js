import React from "react";
import styles from "./InvestorPageView.module.scss";
import FooterView from "../FooterView/FooterView";

import { ReactComponent as InvestmentIcon } from "../../assets/icons/investment-archive-icon.svg";

// import { Link } from "react-router-dom";

const investmentsData = [
  {
    name: "kamienica słoneczna",
    description: "Nowoczesna kamienica w centrum miasta",
    flats: "22 mieszkania",
    services: "2 lokale usługowe",
    garages: "24 garaże podziemne",
    parking: "6 miejsc postojowych",
    imageUrl: "url(../../assets/images/archive_investments/investment_01_521_415.jpg)",
  },
  {
    name: "osiedle przy parku",
    description: "Kameralne osiedle położone w sąsiedztwie parku",
    flats: "36 mieszkań",
    services: "6 lokali usługowych",
    garages: "40 garaży podziemnych",
    parking: "10 miejsc postojowych",
    imageUrl: "url(../../assets/images/archive_investments/investment_02_521_415.jpg)",
  },
  {
    name: "zielona enklawa",
    description: "Nowoczesne osiedle w bezpośrednim sąsiedztwie lasów",
    flats: "60 mieszkań",
    services: "7 lokali usługowych",
    garages: "60 garaży podziemnych",
    parking: "16 miejsc postojowych",
    imageUrl: "url(../../assets/images/archive_investments/investment_03_521_415.jpg)",
  },
];

const renderInvestments = () => {
  console.log(investmentsData);
  return investmentsData.map((investment, index) => {
    const { name, description, flats, services, garages, parking, imageUrl } = investment;
    return (
      <section key={index} className={styles.investmentWrapper}>
        <div className={styles.investmentDescriptionWrapper}>
          <div className={styles.investmentIconWrapper}>
            <InvestmentIcon className={styles.investemntIcon} />
            <h2 className={styles.investmentIconTitle}>{name}</h2>
          </div>
          <p className={styles.investmentDescription}>{description}</p>
          <h3 className={styles.investmentParametersPrimary}>{flats}</h3>
          <h4 className={styles.investmentParametersSecondary}>{services}</h4>
          <h3 className={styles.investmentParametersPrimary}>{garages}</h3>
          <h4 className={styles.investmentParametersSecondary}>{parking}</h4>
        </div>
        <div className={styles.investmentImage} style={{ background: { imageUrl } }}></div>
      </section>
    );
  });
};

const InvestorPageView = () => {
  return (
    <>
      <article className={styles.investorPageWrapper}>
        <h1 className={styles.sectionTitle}>Tak budowaliśmy nasze doświadczenie</h1>
        {renderInvestments()}
      </article>
      <FooterView />

      {/* <Link to="/">home</Link> */}
    </>
  );
};

export default InvestorPageView;
