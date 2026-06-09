"use client"

import { useState, useEffect } from "react";
import styles from "./Events.module.css";
import {
  CalendarEvent,
  EventData,
  fetchMonthEvents,
  getStartDateOffset,
  getDaysInDisplayMonth,
} from "@/lib/calendar";

interface MonthData {
  prev: EventData | null;
  curr: EventData | null;
  next: EventData | null;
}

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [displayDate, setDisplayDate] = useState(new Date());
  const [prefetchedMonthData, setPrefetchedMonthData] = useState<MonthData>({
    prev: null,
    curr: null,
    next: null,
  });
  const [monthData, setMonthData] = useState<EventData | null>(null);

  useEffect(() => {
    const load = async () => {
      const prevDate = new Date(displayDate.getFullYear(), displayDate.getMonth() - 1);
      const nextDate = new Date(displayDate.getFullYear(), displayDate.getMonth() + 1);

      const [prev, curr, next] = await Promise.all([
        fetchMonthEvents(prevDate),
        fetchMonthEvents(displayDate),
        fetchMonthEvents(nextDate),
      ]);

      setPrefetchedMonthData({ prev, curr, next });
      setMonthData(curr);
    };

    load();
  }, [displayDate]);

  const offset = getStartDateOffset(displayDate);
  const totalDays = getDaysInDisplayMonth(displayDate);

  return (
    <main className="min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 max-w-screen-xl mx-auto">
      <h1 className="p-4 text-4xl md:text-5xl lg:text-6xl text-black" style={{ fontFamily: "var(--font-jqkas-wild), sans-serif" }}>Our Events</h1>

      <div className="grid grid-cols-2">
        <h3 className="pl-4 text-xl md:text-2xl lg:text-3xl text-black">
          {displayDate.toLocaleString("default", { month: "long" })} {displayDate.getFullYear()}
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
        <div className="col-span-2 p-4">
          <div className={styles.calendarHeader}>
            {Array.from({ length: 7 }, (_, i) => (
              <div className={styles.day} key={i}>
                {new Date(1983, 0, 2 + i).toLocaleDateString("default", { weekday: "short" })}
              </div>
            ))}
          </div>
          <div className={styles.calendar}>
            {Array.from({ length: 42 }, (_, index) => (
              <div className={styles.calendarCell} key={index}>
                {index >= offset && index - offset + 1 <= totalDays && (
                  <>
                    <div className={styles.calendarCellNumber}>
                      {String(index - offset + 1).padStart(2, "0")}
                    </div>
                    {monthData && (index - offset + 1) in monthData &&
                      monthData[index - offset + 1].map((entry, i) => (
                        <div
                          onClick={() => setSelectedEvent(entry)}
                          className={styles.calendarEvent}
                          key={i}
                        >
                          {entry.summary}
                        </div>
                      ))}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1 p-4">
          <div className={styles.eventInfoHeader}>Event Information</div>
          {selectedEvent === null && <div>Click on an event to see more details!</div>}
          {selectedEvent !== null && (
            <div className={styles.eventInfoContainer}>
              <div className={styles.eventInfoTitle}>{selectedEvent.summary}</div>
              <div className={styles.eventInfoSubtitle}>
                Location: {selectedEvent.location ? selectedEvent.location.split(",")[0] : "TBD"}
              </div>
              <div className={styles.eventInfoText}>{selectedEvent.description}</div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
