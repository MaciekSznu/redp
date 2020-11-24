import React from "react";
import styles from "./ArchiveInvestmentsView.module.scss";
import { ReactComponent as InvestmentIcon } from "../../assets/icons/investment-archive-icon.svg";
import investment01Image from "../../assets/images/archive_investments/investment_01_521_415.jpg";
import investment02Image from "../../assets/images/archive_investments/investment_02_521_415.jpg";
import investment03Image from "../../assets/images/archive_investments/investment_03_521_415.jpg";

const investmentsData = [
  {
    name: "kamienica słoneczna",
    description: "Nowoczesna kamienica w centrum miasta",
    flats: "22 mieszkania",
    services: "2 lokale usługowe",
    garages: "24 garaże podziemne",
    parking: "6 miejsc postojowych",
    imageUrl: investment01Image,
  },
  {
    name: "osiedle przy parku",
    description: "Kameralne osiedle położone w sąsiedztwie parku",
    flats: "36 mieszkań",
    services: "6 lokali usługowych",
    garages: "40 garaży podziemnych",
    parking: "10 miejsc postojowych",
    imageUrl: investment02Image,
  },
  {
    name: "zielona enklawa",
    description: "Nowoczesne osiedle w bezpośrednim sąsiedztwie lasów",
    flats: "60 mieszkań",
    services: "7 lokali usługowych",
    garages: "60 garaży podziemnych",
    parking: "16 miejsc postojowych",
    imageUrl: investment03Image,
  },
];

const renderInvestments = () => {
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
        <div className={styles.investmentImage} style={{ background: `url(${imageUrl})` }}></div>
      </section>
    );
  });
};

const ArchiveInvestmentsView = () => {
  return (
    <>
      <article className={styles.archiveInvestmentsWrapper}>
        <h1 className={styles.sectionTitle}>Tak budowaliśmy nasze doświadczenie</h1>
        {renderInvestments()}
      </article>
    </>
  );
};

export default ArchiveInvestmentsView;
