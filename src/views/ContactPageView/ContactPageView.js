import React from "react";
import HomePageLink from "../../components/Header/HomePageLink";
import ScrollToTop from "../../components/Helpers/ScrollToTop";
import styles from "./ContactPageView.module.scss";
import FooterView from "../FooterView/FooterView";
import { ReactComponent as HexagonLocalization } from "../../assets/helpers/hexagons-localization.svg";
import { ReactComponent as EnvelopeIcon } from "../../assets/icons/envelope-icon.svg";
import { ReactComponent as LogoSubstitute } from "../../assets/helpers/hexagon-green.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook-icon.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter-icon.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram-icon.svg";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar-icon.svg";
import { ReactComponent as AtHomeIcon } from "../../assets/icons/at-home-icon.svg";
import { ReactComponent as FormIcon } from "../../assets/icons/form-icon.svg";
import { ReactComponent as Step1Icon } from "../../assets/icons/step-1-icon.svg";
import { ReactComponent as Step2Icon } from "../../assets/icons/step-2-icon.svg";
import { ReactComponent as CalendarArrow } from "../../assets/icons/calendar-arrow.svg";

const ContactPageView = () => {
  return (
    <>
      <ScrollToTop />
      <HomePageLink />
      <article className={styles.contactPageWrapper}>
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
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/"
                  className={styles.facebook}>
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
        <section className={styles.videoContactWrapper}>
          <h2 className={styles.sectionSubTitle}>umów śię na prezentację mieszkania</h2>
          <p className={styles.sectionParagraph}>
            W trosce o wygodę naszych klientów oferujemy możliwość wirtualnego spotkania z naszym doradcą. Zajrzyj do
            naszego kalendarza i umów się na bezpłatną konsultację online.
          </p>
          <div className={styles.iconsContainer}>
            <h3 className={styles.iconsSubTitle}>dlaczego warto wybrać spotkanie online?</h3>
            <div className={styles.iconWrapper}>
              <FormIcon className={styles.icon} />
              <p className={styles.iconTitle}>prezentacja oferty</p>
            </div>
            <div className={styles.iconWrapper}>
              <CalendarIcon className={styles.icon} />
              <p className={styles.iconTitle}>w dogodnym terminie</p>
            </div>
            <div className={styles.iconWrapper}>
              <AtHomeIcon className={styles.icon} />
              <p className={styles.iconTitle}>bex wychodzenia z domu</p>
            </div>
          </div>
          <div className={styles.onlineMeetingWrapper}>
            <h2 className={styles.sectionSubTitle}>
              <span>2 kroki</span> do spotkania online
            </h2>
            <div className={styles.onlineMeetingSelect}>
              <div className={styles.contactData}>
                <h3 className={styles.step}>krok 1</h3>
                <Step1Icon className={styles.iconImage} />
                <p className={styles.iconTitle}>Wybierz datę spotkania</p>
                <p className={styles.text}>Za pomocą strzałek przewiń do kolejnego tygodnia.</p>
              </div>
              <div className={styles.selectWrapper}>
                <div className={styles.selectBox}>
                  <h4 className={styles.month}>grudzień</h4>
                  <div className={styles.days}>
                    <CalendarArrow className={styles.prev} />
                    <span>Pon</span>
                    <span>Wt</span>
                    <span>Śr</span>
                    <span>Czw</span>
                    <span>Pt</span>
                    <CalendarArrow className={styles.next} />
                  </div>
                  <div className={styles.date}>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                    <span>11</span>
                  </div>
                  <div className={styles.hour9}>
                    <span>9:00</span>
                    <span>9:00</span>
                    <span>9:00</span>
                    <span>9:00</span>
                    <span>9:00</span>
                  </div>
                  <div className={styles.hour11}>
                    <span>11:00</span>
                    <span>11:00</span>
                    <span>11:00</span>
                    <span>11:00</span>
                    <span>11:00</span>
                  </div>
                  <div className={styles.hour13}>
                    <span>13:00</span>
                    <span>13:00</span>
                    <span>13:00</span>
                    <span>13:00</span>
                    <span>13:00</span>
                  </div>
                  <div className={styles.hour15}>
                    <span>15:00</span>
                    <span>15:00</span>
                    <span>15:00</span>
                    <span>15:00</span>
                    <span>15:00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.onlineMeetingFormWrapper}>
              <div className={styles.contactData}>
                <h3 className={styles.step}>krok 2</h3>
                <Step2Icon className={styles.iconImage} />
                <p className={styles.iconTitle}>Wypełnij formularz</p>
                <p className={styles.text}>
                  Oddzwonimy do Ciebie w celu potwierdzenia daty i godziny spotkania online.
                </p>
                <p className={styles.text}>Następnie otrzymasz od nas e-mail z potwierdzeniem umówionego spotkania.</p>
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
          </div>
        </section>
      </article>
      <FooterView />
    </>
  );
};

export default ContactPageView;
