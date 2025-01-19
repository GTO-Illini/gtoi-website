import styles from "./Events.module.css";

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

export default function Events() {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();

  const offset = getStartDateOffset();
  const totalDays = getDaysInMonth();
  return (
    <main className="min-h-screen pl-16 pr-16">

      <h1 className="p-4 text-4xl md:text-5xl lg:text-6xl text-white" style={{ fontFamily: "var(--font-jqkas-wild), sans-serif" }}>Our Events</h1>
      <h3 className="pl-4 text-xl md:text-2xl lg:text-3xl text-white">{currentMonth} {currentYear}</h3>

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
                  <div>{String(index - offset + 1).padStart(2, "0")}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1 p-4">
          <div className={styles.eventHeader}>Event Information</div>
          <div className={styles.eventContainer}>
            <div className={styles.eventTitle}>
              Poker Lecture 1
            </div>
            <div className={styles.eventSubtitle}>
              What is a range?
            </div>
            <div className={styles.eventText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
