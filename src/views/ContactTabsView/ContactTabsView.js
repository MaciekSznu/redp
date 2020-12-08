import React from "react";
import styles from "./ContactTabsView.module.scss";
import { Link } from "react-scroll";
import { ReactComponent as CallIcon } from "../../assets/icons/call-icon.svg";
import { ReactComponent as MessageIcon } from "../../assets/icons/message-icon.svg";
import { ReactComponent as OnlineIcon } from "../../assets/icons/online-icon.svg";

const ContactTabsView = () => (
  <>
    <div className={styles.ContactIconsContainer}>
      <h3 className={styles.ContactSubTitle}>wybierz najlepszą formę kontaktu</h3>
      <Link to="biuro-sprzedaży" smooth={true} duration={500} offset={-100}>
        <div className={styles.IconWrapper}>
          <div className={styles.Icon}>
            <CallIcon className={styles.IconBackground} />
          </div>
          <p className={styles.IconTitle}>porozmawiaj</p>
        </div>
      </Link>
      <Link to="formularz-kontaktowy" hashSpy={true} smooth={true} duration={500} offset={-100}>
        <div className={styles.IconWrapper}>
          <div className={styles.Icon}>
            <MessageIcon className={styles.IconBackground} />
          </div>
          <p className={styles.IconTitle}>napisz</p>
        </div>
      </Link>
      <Link to="formularz-video" hashSpy={true} smooth={true} duration={500} offset={-100}>
        <div className={styles.IconWrapper}>
          <div className={styles.Icon}>
            <OnlineIcon className={styles.IconBackground} />
          </div>
          <p className={styles.IconTitle}>zobacz</p>
        </div>
      </Link>
      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle} id="biuro-sprzedaży">
          skontaktuj się z nami
        </h1>
        <p className={styles.sectionParagraph}>
          Chcesz poznać więcej szczegółów naszej oferty? Masz pytania odnośnie inwestycji? Skontaktuj się z nami, a nasi
          doradcy udzielą Ci wszelkich niezbędnych informacji.
        </p>
      </div>
    </div>
  </>
);

export default ContactTabsView;
