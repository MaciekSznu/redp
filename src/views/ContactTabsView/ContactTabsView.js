import React, { useState } from "react";
import styles from "./ContactTabsView.module.scss";
import ContactOfficeView from "../ContactOfficeView/ContactOfficeView";
import ContactFormView from "../ContactFormView/ContactFormView";
import ContactVideoView from "../ContactVideoView/ContactVideoView";
import { ReactComponent as CallIcon } from "../../assets/icons/call-icon.svg";
import { ReactComponent as MessageIcon } from "../../assets/icons/message-icon.svg";
import { ReactComponent as OnlineIcon } from "../../assets/icons/online-icon.svg";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ContactTabsView = () => {
  const [tab, setTab] = useState("office");
  const [visible, setVisible] = useState(true);

  const selectedTab = () => {
    if (tab === "office") {
      return <ContactOfficeView />;
    } else if (tab === "form") {
      return <ContactFormView />;
    } else {
      return <ContactVideoView />;
    }
  };

  return (
    <>
      <div className={styles.ContactIconsContainer}>
        <h3 className={styles.ContactSubTitle}>wybierz najlepszą formę kontaktu</h3>
        <div
          className={styles.IconWrapper}
          onClick={() => {
            setTab("office");
            setVisible(!visible);
          }}>
          <div className={styles.Icon}>
            <CallIcon className={styles.IconBackground} />
          </div>
          <p className={styles.IconTitle}>porozmawiaj</p>
        </div>
        <div
          className={styles.IconWrapper}
          onClick={() => {
            setTab("form");
            setVisible(!visible);
          }}>
          <div className={styles.Icon}>
            <MessageIcon className={styles.IconBackground} />
          </div>
          <p className={styles.IconTitle}>napisz</p>
        </div>
        <div
          className={styles.IconWrapper}
          onClick={() => {
            setTab("video");
            setVisible(!visible);
          }}>
          <div className={styles.Icon}>
            <OnlineIcon className={styles.IconBackground} />
          </div>
          <p className={styles.IconTitle}>zobacz</p>
        </div>
        <div className={styles.sectionHeader}>
          <h1 className={styles.sectionTitle}>skontaktuj się z nami</h1>
          <p className={styles.sectionParagraph}>
            Chcesz poznać więcej szczegółów naszej oferty? Masz pytania odnośnie inwestycji? Skontaktuj się z nami, a
            nasi doradcy udzielą Ci wszelkich niezbędnych informacji.
          </p>
        </div>
      </div>

      <TransitionGroup className={styles.tab}>
        <CSSTransition in={visible} appear={true} timeout={1000} classNames="fade" key={tab}>
          {selectedTab()}
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default ContactTabsView;
