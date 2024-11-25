export default function Events() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Events</h1>
      <p>Upcoming GTO Illini events will be listed here.</p>
      <div className="relative w-3/4 aspect-video">
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&bgcolor=%23ffffff&showPrint=0&showCalendars=0&showTitle=0&showNav=0&src=N3Z2c2g3MWw0cmQxNDJpM3M2ZDBhYjFwNTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB" className="absolute top-0 left-0 w-full h-full border-0"></iframe>
      </div>
    </main>
  );
}
