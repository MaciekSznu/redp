import React from "react";
import styles from "./ScheduleView.module.scss";
import { ReactComponent as Schedule01 } from "../../assets/icons/schedule/schedule_01.svg";
import { ReactComponent as Schedule02 } from "../../assets/icons/schedule/schedule_02.svg";
import { ReactComponent as Schedule03 } from "../../assets/icons/schedule/schedule_03.svg";
import { ReactComponent as Schedule04 } from "../../assets/icons/schedule/schedule_04.svg";
import { ReactComponent as Schedule05 } from "../../assets/icons/schedule/schedule_05.svg";
import { ReactComponent as Schedule06 } from "../../assets/icons/schedule/schedule_06.svg";
import { ReactComponent as Schedule07 } from "../../assets/icons/schedule/schedule_07.svg";
import { ReactComponent as Schedule08 } from "../../assets/icons/schedule/schedule_08.svg";
import { ReactComponent as Schedule09 } from "../../assets/icons/schedule/schedule_09.svg";
import { ReactComponent as Schedule10 } from "../../assets/icons/schedule/schedule_10.svg";
import { ReactComponent as Schedule11 } from "../../assets/icons/schedule/schedule_11.svg";
import { ReactComponent as Schedule12 } from "../../assets/icons/schedule/schedule_12.svg";
import { ReactComponent as Schedule13 } from "../../assets/icons/schedule/schedule_13.svg";

const ScheduleView = () => {
  return (
    <>
      <section className={styles.schedulePageWrapper}>
        <h1 className={styles.sectionTitle}>Sprawdź co u nas słychać</h1>
        <p className={styles.sectionParagraph}>
          Tutaj możesz sprawdzić, na jakim etapie realizacji aktualnie jesteśmy oraz jak wygląda plan budowy. Śledź
          postępy naszych prac i na bieżąco monitoruj zmiany w naszej inwestycji.
        </p>
        <h2 className={styles.sectionSubTitle}>harmonogram</h2>
        <div className={styles.scheduleEtapsWrapper}>
          <article className={styles.scheduleEtapsRow}>
            <div className={styles.scheduleEtapsRowEtap}>i etap</div>
            <div className={styles.scheduleEtapsRowDescription}>
              <h3 className={styles.descriptionTitle}>start inwestycji</h3>
              <p className={styles.descriptionParagraph}>Marzec</p>
              <p className={styles.descriptionParagraph}>2021</p>
            </div>
          </article>
          <article className={styles.scheduleEtapsRow}>
            <div className={styles.scheduleEtapsRowDescription}>
              <h3 className={styles.descriptionTitle}>Prace ziemne</h3>
              <p className={styles.descriptionParagraph}>Kwiecień</p>
              <p className={styles.descriptionParagraph}>2021</p>
            </div>
          </article>
          <article className={styles.scheduleEtapsRow}>
            <div className={styles.scheduleEtapsRowDescription}>
              <h3 className={styles.descriptionTitle}>Fundamenty</h3>
              <p className={styles.descriptionParagraph}>Maj</p>
              <p className={styles.descriptionParagraph}>2021</p>
            </div>
          </article>
          <article className={styles.scheduleEtapsRow}>
            <div className={styles.scheduleEtapsRowEtap}>ii etap</div>
            <div className={styles.scheduleEtapsRowDescription}>
              <h3 className={styles.descriptionTitle}>Ściany</h3>
              <p className={styles.descriptionParagraph}>Czerwiec</p>
              <p className={styles.descriptionParagraph}>2021</p>
            </div>
          </article>
          <article className={styles.scheduleEtapsRow}>
            <div className={styles.scheduleEtapsRowDescription}>
              <h3 className={styles.descriptionTitle}>Stropy</h3>
              <p className={styles.descriptionParagraph}>Lipiec</p>
              <p className={styles.descriptionParagraph}>2021</p>
            </div>
          </article>
          <article className={styles.scheduleEtapsRow}>
            <div className={styles.scheduleEtapsRowEtap}>iii etap</div>
            <div className={styles.scheduleEtapsRowDescription}>
              <h3 className={styles.descriptionTitle}>Okna i drzwi</h3>
              <p className={styles.descriptionParagraph}>Wrzesień</p>
              <p className={styles.descriptionParagraph}>2021</p>
            </div>
          </article>
          <article className={styles.scheduleEtapsRow}>
            <div className={styles.scheduleEtapsRowDescription}>
              <h3 className={styles.descriptionTitle}>Pokrycie dachu</h3>
              <p className={styles.descriptionParagraph}>Październik</p>
              <p className={styles.descriptionParagraph}>2021</p>
            </div>
          </article>
          <article className={styles.scheduleEtapsRow}>
            <div className={styles.scheduleEtapsRowDescription}>
              <h3 className={styles.descriptionTitle}>Prace wykończeniowe</h3>
              <p className={styles.descriptionParagraph}>Styczeń</p>
              <p className={styles.descriptionParagraph}>2022</p>
            </div>
          </article>
          <Schedule01 className={styles.schedule01} />
          <Schedule02 className={styles.schedule02} />
          <Schedule03 className={styles.schedule03} />
          <Schedule04 className={styles.schedule04} />
          <Schedule05 className={styles.schedule05} />
          <Schedule06 className={styles.schedule06} />
          <Schedule07 className={styles.schedule07} />
          <Schedule08 className={styles.schedule08} />
          <Schedule09 className={styles.schedule09} />
          <Schedule10 className={styles.schedule10} />
          <Schedule11 className={styles.schedule11} />
          <Schedule12 className={styles.schedule12} />
          <Schedule13 className={styles.schedule13} />
        </div>
      </section>
    </>
  );
};

export default ScheduleView;
