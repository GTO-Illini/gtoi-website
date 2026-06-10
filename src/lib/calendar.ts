export interface CalendarEvent {
  id: string;
  summary: string;
  start: { dateTime: string; timeZone?: string };
  end: { dateTime: string; timeZone?: string };
  description?: string;
  location?: string;
}

export type EventData = { [day: number]: CalendarEvent[] };

function getDaysInMonth(date: Date): number {
  const y = date.getFullYear();
  const isLeap = (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
  const days = [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return days[date.getMonth()];
}

export function getStartDateOffset(date: Date): number {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
}

export function getDaysInDisplayMonth(date: Date): number {
  return getDaysInMonth(date);
}

export async function fetchMonthEvents(date: Date): Promise<EventData> {
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const totalDays = getDaysInMonth(date);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
  const timeMin = `${year}-${month}-01T00:00:00-06:00`;
  const timeMax = `${year}-${month}-${totalDays}T23:59:59-06:00`;

  try {
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/gtoillini@gmail.com/events` +
        `?key=${apiKey}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime`
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const result = await response.json();
    const events: CalendarEvent[] = result.items ?? [];

    const data: EventData = {};
    for (const event of events) {
      const day = new Date(event.start.dateTime).getDate();
      if (!data[day]) data[day] = [];
      data[day].push(event);
    }
    return data;
  } catch (error) {
    console.error("Failed to fetch calendar events:", error);
    return {};
  }
}
