import React from "react";
import styles from "./VideoCalendar.module.scss";

import { ReactComponent as CalendarArrow } from "../../assets/icons/calendar-arrow.svg";

const week = [
  {
    day: "mon",
    hours: ["9:00", "11:00", "13:00", "15:00"],
  },
  {
    day: "tue",
    hours: ["9:00", "11:00", "13:00", "15:00"],
  },
  {
    day: "wen",
    hours: ["9:00", "11:00", "13:00", "15:00"],
  },
  {
    day: "thu",
    hours: ["9:00", "11:00", "13:00", "15:00"],
  },
  {
    day: "fri",
    hours: ["9:00", "11:00", "13:00", "15:00"],
  },
];

const months = [
  "styczeń",
  "luty",
  "marzec",
  "kwiecień",
  "maj",
  "czerwiec",
  "lipiec",
  "sierpień",
  "wrzesień",
  "październik",
  "listopad",
  "grudzień",
];

const today = new Date();
const currentMonth = today.getMonth();
const currentDay = today.getDay();
const currentDate = today.getDate();
const dayPlus1 = new Date(today);
dayPlus1.setDate(dayPlus1.getDate() + 1);
const setDayPlus1 = dayPlus1.getDate();
const dayPlus2 = new Date(today);
dayPlus2.setDate(dayPlus2.getDate() + 2);
const setDayPlus2 = dayPlus2.getDate();
const dayPlus3 = new Date(today);
dayPlus3.setDate(dayPlus3.getDate() + 3);
const setDayPlus3 = dayPlus3.getDate();
const dayPlus4 = new Date(today);
dayPlus4.setDate(dayPlus4.getDate() + 4);
const setDayPlus4 = dayPlus4.getDate();
const dayMinus1 = new Date(today);
dayMinus1.setDate(dayMinus1.getDate() - 1);
const setDayMinus1 = dayMinus1.getDate();
const dayMinus2 = new Date(today);
dayMinus2.setDate(dayMinus2.getDate() - 2);
const setDayMinus2 = dayMinus2.getDate();
const dayMinus3 = new Date(today);
dayMinus3.setDate(dayMinus3.getDate() - 3);
const setDayMinus3 = dayMinus3.getDate();
const dayMinus4 = new Date(today);
dayMinus4.setDate(dayMinus4.getDate() - 4);
const setDayMinus4 = dayMinus4.getDate();

const presentDay = currentDay < 6 ? currentDay : 1;

const setDates = () => {
  if (presentDay === 1) {
    return [currentDate, setDayPlus1, setDayPlus2, setDayPlus3, setDayPlus4];
  } else if (presentDay === 2) {
    return [setDayMinus1, currentDate, setDayPlus1, setDayPlus2, setDayPlus3];
  } else if (presentDay === 3) {
    return [setDayMinus2, setDayMinus1, currentDate, setDayPlus1, setDayPlus2];
  } else if (presentDay === 4) {
    return [setDayMinus3, setDayMinus2, setDayMinus1, currentDate, setDayPlus1];
  } else {
    return [setDayMinus4, setDayMinus3, setDayMinus2, setDayMinus1, currentDate];
  }
};

console.log(setDates());
const renderDates = () => {
  const dates = setDates();
  return dates.map((date, index) => {
    return <span key={index}>{date}</span>;
  });
};

const renderMonth = () => {
  return months[currentMonth];
};

const renderMeetingHours = () => {
  return week.map((item) => {
    return item.hours.map((hour, index) => {
      return (
        <span key={index} id={hour}>
          {hour}
        </span>
      );
    });
  });
};

const VideoCalendar = () => {
  return (
    <div className={styles.selectWrapper}>
      <div className={styles.selectBox}>
        <h4 className={styles.month}>{renderMonth()}</h4>
        <div className={styles.days}>
          <CalendarArrow className={styles.prev} />
          <span>Pon</span>
          <span>Wt</span>
          <span>Śr</span>
          <span>Czw</span>
          <span>Pt</span>
          <CalendarArrow className={styles.next} />
        </div>
        <div className={styles.date}>{renderDates()}</div>
        <div className={styles.hours}>{renderMeetingHours()}</div>
      </div>
    </div>
  );
};

export default VideoCalendar;
