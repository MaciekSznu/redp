import React from "react";
import styles from "./ContactView.module.scss";
import { ReactComponent as CallIcon } from "../../assets/icons/call-icon.svg";
import { ReactComponent as MessageIcon } from "../../assets/icons/message-icon.svg";
import { ReactComponent as OnlineIcon } from "../../assets/icons/online-icon.svg";
import { ReactComponent as CameraIcon } from "../../assets/icons/camera-icon.svg";
// import { ReactComponent as QuaotationMark } from "../../assets/helpers/quotation-mark.svg";

const ContactView = () => {
  return (
    <>
      <div className={styles.ContactContainer} id="kontakt">
        <div className={styles.ContentWrapperTop}>
          <h2 className={styles.ContactTitle}>Skontaktuj się z nami</h2>
          <p className={styles.ContactParagraph}>
            Chcesz poznać więcej szczegółów naszej oferty? Masz dodatkowe pytania odnośnie inwestycji? Skontaktuj się z
            nami, a nasi doradcy udzielą Ci wszelkich niezbędnych informacji.
          </p>
        </div>
        <div className={styles.ContactIconsContainer}>
          <h3 className={styles.ContactSubTitle}>wybierz najlepszą formę kontaktu</h3>
          <div className={styles.IconWrapper}>
            <div className={styles.Icon}>
              <CallIcon className={styles.IconBackground} />
            </div>
            <p className={styles.IconTitle}>porozmawiaj</p>
          </div>
          <div className={styles.IconWrapper}>
            <div className={styles.Icon}>
              <MessageIcon className={styles.IconBackground} />
            </div>
            <p className={styles.IconTitle}>napisz</p>
          </div>
          <div className={styles.IconWrapper}>
            <div className={styles.Icon}>
              <OnlineIcon className={styles.IconBackground} />
            </div>
            <p className={styles.IconTitle}>zobacz</p>
          </div>
        </div>
        <div className={styles.ContentWrapperBottom}>
          <h2 className={styles.ContactTitle}>biuro sprzedaży</h2>
          <p className={styles.ContactParagraph}>
            Nasze biura sprzedaży pozostają do Państwa dyspozycji pod wzkazanymi poniżej adresami.{" "}
            <strong>
              W celu umówienia indywidualnego spotkania z naszym doradcą prosimy o wcześniejszy kontakt telefoniczny.
            </strong>{" "}
            Zachęcamy także do skorzystania z <strong>rezerwacji spotkania online</strong>.
          </p>
          <div className={styles.ContactTabs}>
            <div className={styles.ContactTabAdress}>
              <div className={styles.ContactTabAdressLeft}>
                <div className={styles.Logo}>logo</div>
                <p className={styles.AdressBold}>ul. Lipska 20/40</p>
                <p className={styles.AdressStandard}>30-412 Kraków</p>
              </div>
              <div className={styles.ContactTabAdressRight}>
                <div className={styles.AdressTop}>
                  <p className={styles.AdressBold}>Telefon</p>
                  <p className={styles.AdressStandard}>641 278 671</p>
                </div>
                <div className={styles.AdressBottom}>
                  <p className={styles.AdressBold}>Godziny pracy</p>
                  <p className={styles.AdressStandard}>Pon - Pt 9:00 - 17:00</p>
                </div>
              </div>
            </div>
            <div className={styles.ContactTabOnline}>
              <div className={styles.ContactTabOnlineContentWrapper}>
                <h2 className={styles.ContactTabOnlineHeader}>umów spotkanie online</h2>
                <p className={styles.ContactTabOnlineText}>Zadbamy o Twój komfort i dobre samopoczucie</p>
              </div>
              <div className={styles.ContactTabOnlineButtonWrapper}>
                <button className={styles.ContactTabOnlineButton}>szczegóły oferty</button>
                <CameraIcon className={styles.ContactTabOnlineIcon} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ContentWrapperPhoneForm}>
          <h2 className={styles.ContactTitle}>Zostaw swój numer, a nasi doradcy ODDZWONIĄ DO CIEBIE</h2>
          <div className={styles.PhoneFormWrapper}>
            <form className={styles.PhoneForm}>
              {/* <div> */}
              <label className={styles.PhoneFormLabel} htmlFor="phone">
                telefon
              </label>
              <div className={styles.PhoneFormSection}>
                <input className={styles.PhoneFormTextInput} id="phone" type="text" name="phone" placeholder="000 000 000"></input>
                <button className={styles.PhoneFormButton} type="submit">zamów rozmowę</button>
              </div>
              <div className={styles.PhoneFormSectionSecond}>
                <input className={styles.PhoneFormCheckbox}type="checkbox" id="rodo" name="rodo" />
                <div className={styles.PhoneFormCustomCheckbox}></div>
                <label className={styles.PhoneFormCheckboxLabel} htmlFor="rodo">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w celu przedstawienia oferty marketingowej
                  nieruchomości za pośrednictwem połączenia telefonicznego przez Real Estate Sp. z o.o.
                </label>
              </div>
              {/* </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactView;
