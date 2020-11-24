import React from "react";
import styles from "./ContactFormView.module.scss";
import { ReactComponent as EnvelopeIcon } from "../../assets/icons/envelope-icon.svg";
import { ReactComponent as LogoSubstitute } from "../../assets/helpers/hexagon-green.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook-icon.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter-icon.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram-icon.svg";

const ContactFormView = () => {
  return (
    <article className={styles.contactPageWrapper}>
      <h1 className={styles.sectionTitle}>skontaktuj się z nami</h1>
      <p className={styles.sectionParagraph}>
        Chcesz poznać więcej szczegółów naszej oferty? Masz pytania odnośnie inwestycji? Skontaktuj się z nami, a nasi
        doradcy udzielą Ci wszelkich niezbędnych informacji.
      </p>
      <section className={styles.contactFormSection}>
        <h2 className={styles.sectionSubTitle}>napisz do nas</h2>
        <p className={styles.sectionParagraph}>
          Masz pytania odnośnie inwestycji? Skontaktuj się z nami za pośrednictwem formularza kontaktowego. Odpiszemy
          lub oddzwonimy do Ciebie najszybciej jak to możliwe.
        </p>
        <div className={styles.contactFormWrapper}>
          <div className={styles.contactData}>
            <LogoSubstitute className={styles.logo} />
            <div className={styles.adressWrapper}>
              <p className={styles.street}>ul. Lipska 20/40</p>
              <p className={styles.city}>30-412 Kraków</p>
              <p className={styles.phone}>(12) 214 84 30</p>
              <p className={styles.email}>office@office.pl</p>
            </div>
            <div className={styles.socialWrapper}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/" className={styles.facebook}>
                <Facebook className={styles.socialIcon} />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/" className={styles.twitter}>
                <Twitter className={styles.socialIcon} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/"
                className={styles.instagram}>
                <Instagram className={styles.socialIcon} />
              </a>
            </div>
            <EnvelopeIcon className={styles.icon} />
          </div>
          <div className={styles.contactForm}>
            <form className={styles.form}>
              <label className={styles.formLabel} htmlFor="name">
                imię
              </label>
              <input className={styles.formTextInput} id="name" type="text" name="name" placeholder="Imię"></input>
              <label className={styles.formLabel} htmlFor="surname">
                nazwisko
              </label>
              <input
                className={styles.formTextInput}
                id="surname"
                type="text"
                name="surname"
                placeholder="Nazwisko"></input>
              <label className={styles.formLabel} htmlFor="email">
                adres e-mail
              </label>
              <input
                className={styles.formTextInput}
                id="email"
                type="text"
                name="email"
                placeholder="adres e-mail"></input>
              <label className={styles.formLabel} htmlFor="phone">
                telefon
              </label>
              <input
                className={styles.formTextInput}
                id="phone"
                type="text"
                name="phone"
                placeholder="000 000 000"></input>
              <label className={styles.formLabel} htmlFor="message">
                wiadomość
              </label>
              <textarea
                className={styles.formTextArea}
                id="message"
                type="text"
                name="message"
                placeholder="twoja wiadomość"></textarea>
              <div className={styles.sendSection}>
                <input className={styles.rodoCheckbox} type="checkbox" id="rodo" name="rodo" />
                <div className={styles.rodoCustomCheckbox}></div>
                <label className={styles.rodoCheckboxLabel} htmlFor="rodo">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w celu otrzymania oferty oraz wymiany
                  korespondencji przez Real Estate Sp. z o.o.
                </label>
              </div>
              <button className={styles.formButton} type="submit">
                wyślij
              </button>
            </form>
          </div>
        </div>
      </section>
    </article>
  );
};

export default ContactFormView;
