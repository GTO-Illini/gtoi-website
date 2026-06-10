import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const year  = searchParams.get("year");
  const month = searchParams.get("month");

  if (!year || !month) {
    return NextResponse.json({ error: "Missing year or month" }, { status: 400 });
  }

  const y = parseInt(year, 10);
  const m = parseInt(month, 10);
  if (isNaN(y) || isNaN(m) || m < 1 || m > 12) {
    return NextResponse.json({ error: "Invalid year or month" }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Calendar not configured" }, { status: 503 });
  }

  const mm = String(m).padStart(2, "0");
  const totalDays = new Date(y, m, 0).getDate();
  const timeMin = `${y}-${mm}-01T00:00:00-06:00`;
  const timeMax = `${y}-${mm}-${totalDays}T23:59:59-06:00`;

  const url =
    `https://www.googleapis.com/calendar/v3/calendars/gtoillini@gmail.com/events` +
    `?key=${apiKey}&timeMin=${encodeURIComponent(timeMin)}&timeMax=${encodeURIComponent(timeMax)}` +
    `&singleEvents=true&orderBy=startTime`;

  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) throw new Error(`Google API error: ${res.status}`);
    const data = await res.json();
    return NextResponse.json(data.items ?? []);
  } catch {
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 502 });
  }
}
