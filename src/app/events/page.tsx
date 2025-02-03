"use client"

import { useState, useEffect } from "react";
import styles from "./Events.module.css";

// Comprehensive type definitions
interface GoogleCalendarEventTime {
  dateTime: string;
  timeZone?: string;
}

interface GoogleCalendarEvent {
  id: string;
  summary: string;
  start: GoogleCalendarEventTime;
  end: GoogleCalendarEventTime;
  description?: string;
  location?: string;
}

interface EventData {
  [key: number]: GoogleCalendarEvent[];
}

interface MonthData {
  prev: EventData | null;
  curr: EventData | null;
  next: EventData | null;
}

function getDaysInMonth(date: Date): number {
  const isLeapYear = (date.getFullYear() % 4 === 0 && date.getFullYear() % 100 !== 0) || (date.getFullYear() % 400 === 0);
  const numDays = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return numDays[date.getMonth()];
}

function getStartDateOffset(date: Date): number {
  const firstDay = new Date(date.getFullYear(), date.getMonth());
  firstDay.setDate(1);
  return firstDay.getDay();
}

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<GoogleCalendarEvent | null>(null);
  const [displayDate, setDisplayDate] = useState(new Date());
  const [prefetchedMonthData, setPrefetchedMonthData] = useState<MonthData>({
    prev: null,
    curr: null,
    next: null
  });
  const [monthData, setMonthData] = useState<EventData | null>(null);

  const fetchCalendarData = async (date: Date): Promise<void> => {
    const fetchFromDate = async (date: Date): Promise<GoogleCalendarEvent[]> => {
      const year = String(date.getFullYear());
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const totalDays = getDaysInMonth(date);
      const apiKey = "AIzaSyDldUJyWFJnNQ-nkUndqNwc_dYHprGC1bU";
      const timeMin = `${year}-${month}-01T00:00:00-06:00`;
      const timeMax = `${year}-${month}-${totalDays}T23:59:59-06:00`;
      const singleEvents = "true";
      const orderBy = "startTime";

      try {
        const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/gtoillini@gmail.com/events?key=${apiKey}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=${singleEvents}&orderBy=${orderBy}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        return result['items'] as GoogleCalendarEvent[];
      } catch (error) {
        console.error("Failed to fetch calendar events:", error);
        return [];
      }
    }

    try {
      const prevMonthDate = new Date(date);
      const nextMonthDate = new Date(date);
      prevMonthDate.setMonth(date.getMonth() - 1);
      nextMonthDate.setMonth(date.getMonth() + 1);

      const monthArray = await Promise.all([
        fetchFromDate(prevMonthDate),
        fetchFromDate(date),
        fetchFromDate(nextMonthDate),
      ])

      setPrefetchedMonthData(() => {
        const tempDataArray: EventData[] = monthArray.map(month => {
          const tempData: EventData = {};
          month.forEach(event => {
            const dateObj = new Date(event.start.dateTime);
            const dayOfMonth = dateObj.getDate();

            if (!tempData[dayOfMonth]) {
              tempData[dayOfMonth] = [];
            }
            tempData[dayOfMonth].push(event);
          });
          return tempData;
        });

        const updatedMonthData = {
          prev: tempDataArray[0],
          curr: tempDataArray[1],
          next: tempDataArray[2]
        };

        setMonthData(updatedMonthData.curr);
        return updatedMonthData;
      });
    } catch (error) {
      console.error("Error processing calendar data:", error);
    }
  }

  useEffect(() => {
    fetchCalendarData(displayDate);
  }, [displayDate]);

  // For debugging
  useEffect(() => {
    console.log("monthData:", monthData);
  }, [monthData]);

  const handleClick = (event: GoogleCalendarEvent) => {
    setSelectedEvent(event);
  }

  const offset = getStartDateOffset(displayDate);
  const totalDays = getDaysInMonth(displayDate);

  return (
    <main className="min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 max-w-screen-xl mx-auto">
      <h1 className="p-4 text-4xl md:text-5xl lg:text-6xl text-black" style={{ fontFamily: "var(--font-jqkas-wild), sans-serif" }}>Our Events</h1>

      <div className="grid grid-cols-2">
        <h3 className="pl-4 text-xl md:text-2xl lg:text-3xl text-black">
          {displayDate.toLocaleString('default', { month: 'long' })} {displayDate.getFullYear()}
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={() => {
              setMonthData(prefetchedMonthData.prev);
              setDisplayDate(new Date(displayDate.getFullYear(), displayDate.getMonth() - 1));
            }}
            className={styles.arrow}
          >
            {"<"}
          </button>
          <button
            onClick={() => {
              setMonthData(prefetchedMonthData.next);
              setDisplayDate(new Date(displayDate.getFullYear(), displayDate.getMonth() + 1));
            }}
            className={styles.arrow}
          >
            {">"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className={styles.calendarWrapper}>
          <div className={styles.calendarHeader}>
            {Array.from({ length: 7 }, (_, index) => (
              <div className={styles.day} key={index}>
                {new Date(1983, 0, 2 + index).toLocaleDateString('default', { weekday: 'short' })}
              </div>
            ))}
          </div>
          <div className={styles.calendar}>
            {Array.from({ length: 42 }, (_, index) => (
              <div className={styles.calendarCell} key={index}>
                {(index >= offset && index - offset + 1 <= totalDays) && (
                  <>
                    <div className={styles.calendarCellNumber}>
                      {String(index - offset + 1).padStart(2, "0")}
                    </div>
                    {(monthData && (index - offset + 1) in monthData) && (
                      monthData[index - offset + 1].map((entry, entryIndex) => (
                        <div
                          onClick={() => handleClick(entry)}
                          className={styles.calendarEvent}
                          key={entryIndex}
                        >
                          {entry.summary}
                        </div>
                      ))
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.eventInfoWrapper}>
          <div className={styles.eventInfoHeader}>Event Information</div>
          {selectedEvent === null && <div>Click on an event to see more details!</div>}
          {selectedEvent !== null && (
            <div className={styles.eventInfoContainer}>
              <div className={styles.eventInfoTitle}>
                {selectedEvent.summary}
              </div>
              <div className={styles.eventInfoSubtitle}>
                Location: {selectedEvent.location ? selectedEvent.location?.split(",")[0] : "TBD"}
              </div>
              <div className={styles.eventInfoText}>
                {selectedEvent.description}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}