import React, { useState } from "react";
import styles from "./ContactTabsView.module.scss";
import ContactOfficeView from "../ContactOfficeView/ContactOfficeView";
import ContactFormView from "../ContactFormView/ContactFormView";
import ContactVideoView from "../ContactVideoView/ContactVideoView";
import { ReactComponent as CallIcon } from "../../assets/icons/call-icon.svg";
import { ReactComponent as MessageIcon } from "../../assets/icons/message-icon.svg";
import { ReactComponent as OnlineIcon } from "../../assets/icons/online-icon.svg";

const ContactTabsView = () => {
  const [tab, setTab] = useState("office");

  return (
    <>
      <div className={styles.ContactIconsContainer}>
        <h3 className={styles.ContactSubTitle}>wybierz najlepszą formę kontaktu</h3>
        <div className={styles.IconWrapper} onClick={() => setTab("office")}>
          <div className={styles.Icon}>
            <CallIcon className={styles.IconBackground} />
          </div>
          <p className={styles.IconTitle}>porozmawiaj</p>
        </div>
        <div className={styles.IconWrapper} onClick={() => setTab("form")}>
          <div className={styles.Icon}>
            <MessageIcon className={styles.IconBackground} />
          </div>
          <p className={styles.IconTitle}>napisz</p>
        </div>
        <div className={styles.IconWrapper} onClick={() => setTab("video")}>
          <div className={styles.Icon}>
            <OnlineIcon className={styles.IconBackground} />
          </div>
          <p className={styles.IconTitle}>zobacz</p>
        </div>
      </div>
      <div className={styles.tab}>
        {tab === "office" && <ContactOfficeView />}
        {tab === "form" && <ContactFormView />}
        {tab === "video" && <ContactVideoView />}
      </div>
    </>
  );
};

export default ContactTabsView;
