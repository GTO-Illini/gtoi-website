"use client"

import { useState, useEffect } from "react";
import styles from "./Events.module.css";

function getDaysInMonth(date: Date) {
  const isLeapYear = (date.getFullYear() % 4 === 0 && date.getFullYear() % 100 !== 0) || (date.getFullYear() % 400 === 0);
  const numDays = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return numDays[date.getMonth()];
}

function getStartDateOffset(date: Date) {
  const firstDay = new Date(date.getFullYear(), date.getMonth());
  firstDay.setDate(1);
  return firstDay.getDay();
}

// function getCalendarData(date: Date) {
//   const year = String(date.getFullYear())
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const totalDays = getDaysInMonth(date);
//   const apiKey = "AIzaSyDldUJyWFJnNQ-nkUndqNwc_dYHprGC1bU";
//   const timeMin = `${year}-${month}-01T00:00:00-06:00`;
//   const timeMax = `${year}-${month}-${totalDays}T23:59:59-06:00`;
//   const singleEvents = "true";
//   const orderBy = "startTime";
//   return fetch(`https://www.googleapis.com/calendar/v3/calendars/gtoillini@gmail.com/events?key=${apiKey}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=${singleEvents}&orderBy=${orderBy}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// }

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [displayDate, setDisplayDate] = useState(new Date());
  const [monthData, setMonthData] = useState<{ [key: number]: any }>({});

  const fetchCalendarData = async (date: Date) => {
    try {
      const year = String(date.getFullYear())
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const totalDays = getDaysInMonth(date);
      const apiKey = "AIzaSyDldUJyWFJnNQ-nkUndqNwc_dYHprGC1bU";
      const timeMin = `${year}-${month}-01T00:00:00-06:00`;
      const timeMax = `${year}-${month}-${totalDays}T23:59:59-06:00`;
      const singleEvents = "true";
      const orderBy = "startTime";
      const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/gtoillini@gmail.com/events?key=${apiKey}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=${singleEvents}&orderBy=${orderBy}`)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      const events = result['items'];
      setMonthData(() => {
        const tempData: { [key: number]: any } = {};
        for (const event of events) {
          const dateObj = new Date(event['start']['dateTime']);
          const dayOfMonth = dateObj.getDate();
          tempData[dayOfMonth] = tempData[dayOfMonth] ? [...tempData[dayOfMonth], event] : [event];
        }
        return tempData;
      });
    } catch (err) {
      console.log("error!");
    }
  }

  useEffect(() => {
    fetchCalendarData(displayDate);
  }, [displayDate]);

  // for debugging
  useEffect(() => {
    console.log("monthData:", monthData);
  }, [monthData]);

  const handleClick = (event: any) => {
    // call setSelectedEvent and update what the eventInfo section displays
    setSelectedEvent(event);
  }

  const offset = getStartDateOffset(displayDate);
  const totalDays = getDaysInMonth(displayDate);
  return (
    <main className="min-h-screen pl-16 pr-16">

      <h1 className="p-4 text-4xl md:text-5xl lg:text-6xl text-white" style={{ fontFamily: "var(--font-jqkas-wild), sans-serif" }}>Our Events</h1>
      <div className="grid grid-cols-2">
        <h3 className="pl-4 text-xl md:text-2xl lg:text-3xl text-white">{displayDate.toLocaleString('default', { month: 'long' })} {displayDate.getFullYear()}</h3>
        <div className="flex space-x-2">
          <button onClick={() => {
            setDisplayDate(new Date(displayDate.getFullYear(), displayDate.getMonth() - 1));
          }} className={styles.arrow}>{"<"}</button>
          <button onClick={() => {
            setDisplayDate(new Date(displayDate.getFullYear(), displayDate.getMonth() + 1));
          }} className={styles.arrow}>{">"}</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">

        <div className="col-span-2 p-4">
          <div className={styles.calendarHeader}>
            <div className={styles.day}>Sun</div>
            <div className={styles.day}>Mon</div>
            <div className={styles.day}>Tue</div>
            <div className={styles.day}>Wed</div>
            <div className={styles.day}>Thu</div>
            <div className={styles.day}>Fri</div>
            <div className={styles.day}>Sat</div>
          </div>
          <div className={styles.calendar}>

            {Array.from({ length: 42 }, (_, index) => (
              <div className={styles.calendarCell} key={index}>
                {(index >= offset && index - offset + 1 <= totalDays) && (
                  <>
                    <div className={styles.calendarCellNumber}>{String(index - offset + 1).padStart(2, "0")}</div>
                    {((index - offset + 1) in monthData) && (
                      Array.from(monthData[index - offset + 1], (entry: any, entryIndex: number) => (
                        <div onClick={() => handleClick(entry)} className={styles.calendarEvent} key={entryIndex}>{entry.summary}</div>
                      ))
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1 p-4">
          <div className={styles.eventInfoHeader}>Event Information</div>
          {selectedEvent === null && <div>Click on an event to see more details!</div>}
          {selectedEvent !== null && <div className={styles.eventInfoContainer}>
            <div className={styles.eventInfoTitle}>
              {selectedEvent.summary}
            </div>
            <div className={styles.eventInfoSubtitle}>
              Location: {selectedEvent.location ? selectedEvent.location : "TBD"}
            </div>
            <div className={styles.eventInfoText}>
              {selectedEvent.description}
            </div>
          </div>}
        </div>

      </div>
    </main>
  );
}
