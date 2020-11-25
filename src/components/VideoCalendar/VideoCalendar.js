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

const renderMeetingHours = () => {
  return week.map((item) => {
    return item.hours.map((hour, j) => {
      return <span key={j}>{hour}</span>;
    });
  });
};

console.log(renderMeetingHours());
const VideoCalendar = () => {
  // const today = new Date();
  // const currentMonth = today.getMonth() + 1;
  // console.log("month: ", currentMonth);
  // const currentDay = today.getDay();
  // console.log("day: ", currentDay);
  // const currentDate = today.getDate();
  // console.log("date: ", currentDate);

  // if currentDay = 1,2,3,4,5 -> odpowiedni styl do day

  return (
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
        <div className={styles.hours}>{renderMeetingHours()}</div>
      </div>
    </div>
  );
};

export default VideoCalendar;
