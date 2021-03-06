import React from "react";
import styles from "./ContactVideoView.module.scss";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar-icon.svg";
import { ReactComponent as AtHomeIcon } from "../../assets/icons/at-home-icon.svg";
import { ReactComponent as FormIcon } from "../../assets/icons/form-icon.svg";
import { ReactComponent as Step1Icon } from "../../assets/icons/step-1-icon.svg";
import { ReactComponent as Step2Icon } from "../../assets/icons/step-2-icon.svg";
import VideoCalendar from "../../components/VideoCalendar/VideoCalendar";

const ContactVideoView = () => {
  return (
    <article className={styles.videoPageWrapper}>
      <section className={styles.videoContactWrapper} id="formularz-video">
        <h2 className={styles.sectionSubTitle}>umów się na prezentację mieszkania</h2>
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
            <p className={styles.iconTitle}>bez wychodzenia z domu</p>
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
              <p className={styles.iconTitle}>Wybierz termin spotkania</p>
              <p className={styles.text}>Za pomocą strzałek przewiń do kolejnego tygodnia.</p>
            </div>
            <VideoCalendar className={styles.selectWrapper} />
          </div>
          <div className={styles.onlineMeetingFormWrapper}>
            <div className={styles.contactData}>
              <h3 className={styles.step}>krok 2</h3>
              <Step2Icon className={styles.iconImage} />
              <p className={styles.iconTitle}>Wypełnij formularz</p>
              <p className={styles.text}>Oddzwonimy do Ciebie w celu potwierdzenia daty i godziny spotkania online.</p>
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
  );
};

export default ContactVideoView;
