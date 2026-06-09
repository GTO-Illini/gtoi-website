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
    <main>

      {/* ===== PAGE HEADER ===== */}
      <header style={{
        background: 'var(--felt)', color: 'var(--on-navy)',
        padding: 'clamp(40px, 6vw, 72px) 0',
        position: 'relative', overflow: 'hidden',
      }}>
        <div aria-hidden style={{
          position: 'absolute', right: -30, bottom: -90,
          fontSize: 340, lineHeight: 1, color: '#fff', opacity: .045,
          pointerEvents: 'none', userSelect: 'none',
        }}>♠</div>
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <span className="eyebrow on-navy">Schedule</span>
          <h1 style={{
            fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: .96,
            color: '#fff', marginTop: 16, fontWeight: 500, letterSpacing: '-.02em',
          }}>
            Our <span className="accent">Events</span>
          </h1>
        </div>
      </header>

      {/* ===== CALENDAR ===== */}
      <section className="section tight">
        <div className="wrap">

          {/* month nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
            <button
              className={styles.arrow}
              onClick={() => {
                setMonthData(prefetchedMonthData.prev);
                setDisplayDate(new Date(displayDate.getFullYear(), displayDate.getMonth() - 1));
              }}
            >{"<"}</button>
            <h2 style={{
              fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 500,
              letterSpacing: '-.01em', color: 'var(--ink)', margin: 0,
            }}>
              {displayDate.toLocaleString("default", { month: "long" })}{" "}
              {displayDate.getFullYear()}
            </h2>
            <button
              className={styles.arrow}
              onClick={() => {
                setMonthData(prefetchedMonthData.next);
                setDisplayDate(new Date(displayDate.getFullYear(), displayDate.getMonth() + 1));
              }}
            >{">"}</button>
          </div>

          <div className="calendar-layout">
            {/* calendar grid */}
            <div>
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

            {/* event detail panel */}
            <div>
              <div className={styles.eventInfoHeader}>Event Info</div>
              {selectedEvent === null && (
                <p style={{
                  fontSize: 13,
                  color: 'var(--muted)',
                  fontFamily: 'var(--font-ibm-plex-mono)',
                  letterSpacing: '.06em',
                  textTransform: 'uppercase',
                }}>
                  Click an event to see details.
                </p>
              )}
              {selectedEvent !== null && (
                <div className={styles.eventInfoContainer}>
                  <div className={styles.eventInfoTitle}>{selectedEvent.summary}</div>
                  <div className={styles.eventInfoSubtitle}>
                    {selectedEvent.location
                      ? selectedEvent.location.split(",")[0]
                      : "Location TBD"}
                  </div>
                  <div className={styles.eventInfoText}>{selectedEvent.description}</div>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
