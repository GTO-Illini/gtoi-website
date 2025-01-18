"use client";

import { useEffect } from "react";
import React from 'react';
import styles from './Calendar.module.css'

function getDaysInMonth(): number {
  const today = new Date();
  const isLeapYear = (today.getFullYear() % 4 === 0 && today.getFullYear() % 100 !== 0) || (today.getFullYear() % 400 === 0);
  const numDays = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return numDays[today.getMonth()];
}

function getStartDateOffset() {
  const firstDay = new Date();
  firstDay.setDate(1);
  return firstDay.getDay();
}

const Calendar = () => {
  // useEffect(() => {
  //   fetch("https://www.googleapis.com/calendar/v3/calendars/gtoillini@gmail.com/events?key=AIzaSyDldUJyWFJnNQ-nkUndqNwc_dYHprGC1bU")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);
  const offset = getStartDateOffset();
  const totalDays = getDaysInMonth();
  return (
    <div className={styles.calendar}>
      {Array.from({ length: 42 }, (_, index) => (
        <div className={styles.calendarCell} key={index}>
          {(index >= offset && index - offset + 1 <= totalDays) && (
            <div>{index - offset + 1}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Calendar;