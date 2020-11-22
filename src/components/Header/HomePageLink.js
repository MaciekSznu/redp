import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePageLink.module.scss";
import TopMenuSecondary from "../../components/Header/TopMenuSecondary";

const HomePageLink = () => {
  return (
    <>
      <TopMenuSecondary />
      <div className={styles.homePageLink}>
        <Link to="/">home</Link>
      </div>
    </>
  );
};

export default HomePageLink;
