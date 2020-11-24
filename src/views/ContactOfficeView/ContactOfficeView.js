import React from "react";
import styles from "./ContactOfficeView.module.scss";
import { ReactComponent as HexagonLocalization } from "../../assets/helpers/hexagons-localization.svg";

const ContactOfficeView = () => {
  return (
    <article className={styles.contactOfficeWrapper}>
      <h1 className={styles.sectionTitle}>skontaktuj się z nami</h1>
      <p className={styles.sectionParagraph}>
        Chcesz poznać więcej szczegółów naszej oferty? Masz pytania odnośnie inwestycji? Skontaktuj się z nami, a nasi
        doradcy udzielą Ci wszelkich niezbędnych informacji.
      </p>
      <h2 className={styles.sectionSubTitle}>nasze biuro sprzedaży</h2>
      <p className={styles.sectionParagraph}>
        W celu umówienia indywidualnego spotkania z naszym doradcą prosimy o wcześniejszy kontakt telefoniczny.
      </p>
      <section className={styles.salesOfficeBanner}>
        <div className={styles.adressTextWrapper}>
          <p className={styles.adress}>ul. Lipska 20/40</p>
          <p className={styles.city}>30-412 Kraków</p>
          <p className={styles.openingHours}>Godziny pracy</p>
          <p className={styles.hours}>pon - Pt 9:00 - 17:00</p>
        </div>
        <div className={styles.agentTextWrapper}>
          <p className={styles.name}>Anna Kwiecień</p>
          <p className={styles.function}>doradca klienta</p>
          <p className={styles.contact}>Telefon</p>
          <p className={styles.phoneNumber}>602 755 332</p>
        </div>
        <HexagonLocalization className={styles.salesOfficeHexagons} />
      </section>
    </article>
  );
};

export default ContactOfficeView;
