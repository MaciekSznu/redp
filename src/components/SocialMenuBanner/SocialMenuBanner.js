import React from "react";
import styles from "./SocialMenuBanner.module.scss";
import { ReactComponent as Facebook } from "../../assets/icons/facebook-icon.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter-icon.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram-icon.svg";

const SocialMenuBanner = () => {
  return (
    <>
      <div className={styles.SocialMenuBanner}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/" className={styles.Facebook}>
          <Facebook />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/" className={styles.Twitter}>
          <Twitter />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/" className={styles.Instagram}>
          <Instagram />
        </a>
      </div>
    </>
  );
};

export default SocialMenuBanner;
