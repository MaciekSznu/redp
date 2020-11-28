import React, { useState, useRef, useEffect } from "react";
import styles from "./VideoCalendar.module.scss";
import { ReactComponent as CalendarArrow } from "../../assets/icons/calendar-arrow.svg";

const week = [
  [
    ["mon", "9:00"],
    ["mon", "11:00"],
    ["mon", "13:00"],
    ["mon", "15:00"],
  ],
  [
    ["tue", "9:00"],
    ["tue", "11:00"],
    ["tue", "13:00"],
    ["tue", "15:00"],
  ],
  [
    ["wen", "9:00"],
    ["wen", "11:00"],
    ["wen", "13:00"],
    ["wen", "15:00"],
  ],
  [
    ["thu", "9:00"],
    ["thu", "11:00"],
    ["thu", "13:00"],
    ["thu", "15:00"],
  ],
  [
    ["fri", "9:00"],
    ["fri", "11:00"],
    ["fri", "13:00"],
    ["fri", "15:00"],
  ],
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
const nextWeekToday = new Date(today);
nextWeekToday.setDate(nextWeekToday.getDate() + 7);
const currentDay = today.getDay();

const presentDay = currentDay < 6 ? currentDay : 1;

const VideoCalendar = () => {
  const [currentWeek, setCurrentWeek] = useState(true);
  const [selectedTime, setSelectedTime] = useState();

  const setDay = currentWeek ? today : nextWeekToday;

  const currentMonth = setDay.getMonth();
  const renderMonth = () => {
    return months[currentMonth];
  };

  const setDate = setDay.getDate();
  const dayPlus1 = new Date(setDay);
  dayPlus1.setDate(dayPlus1.getDate() + 1);
  const setDayPlus1 = dayPlus1.getDate();
  const dayPlus2 = new Date(setDay);
  dayPlus2.setDate(dayPlus2.getDate() + 2);
  const setDayPlus2 = dayPlus2.getDate();
  const dayPlus3 = new Date(setDay);
  dayPlus3.setDate(dayPlus3.getDate() + 3);
  const setDayPlus3 = dayPlus3.getDate();
  const dayPlus4 = new Date(setDay);
  dayPlus4.setDate(dayPlus4.getDate() + 4);
  const setDayPlus4 = dayPlus4.getDate();
  const dayMinus1 = new Date(setDay);
  dayMinus1.setDate(dayMinus1.getDate() - 1);
  const setDayMinus1 = dayMinus1.getDate();
  const dayMinus2 = new Date(setDay);
  dayMinus2.setDate(dayMinus2.getDate() - 2);
  const setDayMinus2 = dayMinus2.getDate();
  const dayMinus3 = new Date(setDay);
  dayMinus3.setDate(dayMinus3.getDate() - 3);
  const setDayMinus3 = dayMinus3.getDate();
  const dayMinus4 = new Date(setDay);
  dayMinus4.setDate(dayMinus4.getDate() - 4);
  const setDayMinus4 = dayMinus4.getDate();

  const setDates = () => {
    if (presentDay === 1) {
      return [setDate, setDayPlus1, setDayPlus2, setDayPlus3, setDayPlus4];
    } else if (presentDay === 2) {
      return [setDayMinus1, setDate, setDayPlus1, setDayPlus2, setDayPlus3];
    } else if (presentDay === 3) {
      return [setDayMinus2, setDayMinus1, setDate, setDayPlus1, setDayPlus2];
    } else if (presentDay === 4) {
      return [setDayMinus3, setDayMinus2, setDayMinus1, setDate, setDayPlus1];
    } else {
      return [setDayMinus4, setDayMinus3, setDayMinus2, setDayMinus1, setDate];
    }
  };

  const renderDates = () => {
    const dates = setDates();
    return dates.map((date, index) => {
      return <span key={index}>{date}</span>;
    });
  };

  const inputRef = useRef(null);

  const usePrevious = () => {
    const prevInputRef = useRef();
    useEffect(() => {
      prevInputRef.current = inputRef.current;
    });
    return prevInputRef.current;
  };

  const prevState = usePrevious(selectedTime);

  useEffect(() => {
    if (inputRef.current) {
      // console.log(inputRef.current);
      inputRef.current.parentNode.style.background = "#56928a";
    }
    if (prevState) {
      // console.log(prevState);
      prevState.parentNode.style.background = "#f8f7f7";
    }
  }, [prevState, selectedTime]);

  const renderMeetingHours = () => {
    return week.map((item) => {
      return item.map((arr) => {
        return (
          <span key={arr[0] + arr[1]}>
            <label id={arr[0] + arr[1]}>
              <input
                ref={selectedTime === arr[0] + arr[1] ? inputRef : null}
                type="radio"
                checked={selectedTime === arr[0] + arr[1]}
                value={arr[0] + arr[1]}
                onChange={(e) => {
                  setSelectedTime(e.target.value);
                }}
              />
              {arr[1]}
            </label>
          </span>
        );
      });
    });
  };

  return (
    <div className={styles.selectWrapper}>
      <div className={styles.selectBox}>
        <h4 className={styles.month}>{renderMonth()}</h4>
        <div className={styles.days}>
          {!currentWeek && <CalendarArrow className={styles.prev} onClick={() => setCurrentWeek(!currentWeek)} />}
          <span>Pon</span>
          <span>Wt</span>
          <span>Śr</span>
          <span>Czw</span>
          <span>Pt</span>
          {currentWeek && <CalendarArrow className={styles.next} onClick={() => setCurrentWeek(!currentWeek)} />}
        </div>
        <div className={styles.date}>{renderDates()}</div>
        <div className={styles.hours}>{renderMeetingHours()}</div>
      </div>
    </div>
  );
};

export default VideoCalendar;
