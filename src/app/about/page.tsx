export default function About() {
  const leadership = [
    {
      title: "President",
      name: "Patrick Smith",
      image: "/image-assets/leadership_photos/patsmithgaming.jpg",
      linkedin: "https://www.linkedin.com/in/patrick-o-smith/",
    },
    {
      title: "Vice President",
      name: "Kevin Zhang",
      image: "/image-assets/leadership_photos/kevin_headshot.jpg",
      linkedin: "https://www.linkedin.com/in/kevin-y-zhang/",
    },
    {
      title: "Treasurer",
      name: "Rose Zhang",
      image: "/image-assets/leadership_photos/rose_profile.png",
      linkedin: "https://www.linkedin.com/in/rose-zhang-m/",
    },
    {
      title: "Secretary",
      name: "Owen Vela",
      image: "/image-assets/leadership_photos/owen_headshot.png",
      linkedin: "https://www.linkedin.com/in/owen-vela/",
    },
    {
      title: "Membership Director",
      name: "Peter Lin",
      image: "/image-assets/leadership_photos/peter_being_a_stud.jpg",
      linkedin: "https://www.linkedin.com/in/peter-q-lin/",
    },
  ];

  const pillars = [
    {
      title: "Lectures",
      description:
        "GTO Illini presents regular lectures on a variety of poker topics, ranging from the basics to deep dives into advanced concepts. Check out our events page to make sure you don't miss any, and our resources page to take a look at past lectures.",
    },
    {
      title: "Development",
      description:
        "To make poker learning as accessible as possible, GTO Illini is constantly developing new poker learning software for members to make use of. Check out our resources page to start using our tools and upping your game!",
    },
    {
      title: "Competitions",
      description:
        "Poker is difficult to study practically without experience, so we hold regular online competitions to sharpen your knowledge and test your skills!",
    },
  ];

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Page header */}
      <div
        className="px-6 py-14 text-center"
        style={{ backgroundColor: "var(--primary)" }}
      >
        <h1
          className="text-5xl md:text-6xl font-normal text-white mb-3"
          style={{ fontFamily: "var(--font-jqkas-wild)" }}
        >
          About Us
        </h1>
        <p
          className="text-base md:text-lg max-w-xl mx-auto"
          style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-geist-sans)" }}
        >
          Game Theory Optimal poker at the University of Illinois
        </p>
      </div>

      {/* Pillars */}
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl p-6"
              style={{
                border: "1px solid var(--border)",
                backgroundColor: "var(--surface)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "var(--primary-light)" }}
              >
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: "var(--primary)", fontFamily: "var(--font-geist-sans)" }}
                >
                  {pillar.title.slice(0, 2)}
                </span>
              </div>
              <h2
                className="text-xl font-semibold mb-2"
                style={{ fontFamily: "var(--font-geist-sans)", color: "var(--foreground)" }}
              >
                {pillar.title}
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--muted)", fontFamily: "var(--font-geist-sans)" }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership */}
      <div
        className="px-6 py-14"
        style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-normal mb-10 text-center"
            style={{ fontFamily: "var(--font-jqkas-wild)", color: "var(--primary)" }}
          >
            Leadership
          </h2>
          <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {leadership.map((leader) => (
              <div key={leader.name} className="flex flex-col items-center text-center group">
                <div
                  className="rounded-full overflow-hidden mb-3"
                  style={{
                    width: "100px",
                    height: "100px",
                    border: "3px solid var(--primary-light)",
                    boxShadow: "0 4px 12px rgba(20,53,96,0.12)",
                  }}
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                  style={{ color: "var(--muted)", fontFamily: "var(--font-geist-sans)" }}
                >
                  {leader.title}
                </p>
                <p
                  className="text-sm font-semibold mb-2"
                  style={{ color: "var(--foreground)", fontFamily: "var(--font-geist-sans)" }}
                >
                  {leader.name}
                </p>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs transition-opacity duration-150 hover:opacity-70"
                  style={{ color: "var(--primary)", fontFamily: "var(--font-geist-sans)" }}
                >
                  <img
                    src="/image-assets/LinkedIn_icon.svg"
                    alt="LinkedIn"
                    className="w-4 h-4"
                  />
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social links */}
      <div className="px-6 py-12 text-center" style={{ borderTop: "1px solid var(--border)" }}>
        <h2
          className="text-2xl font-normal mb-8"
          style={{ fontFamily: "var(--font-jqkas-wild)", color: "var(--primary)" }}
        >
          Connect With Us
        </h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://www.instagram.com/gto_illini/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-150 hover:opacity-80"
            style={{
              border: "1px solid var(--border)",
              color: "var(--foreground)",
              fontFamily: "var(--font-geist-sans)",
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
          >
            <img src="/image-assets/Instagram_logo_2016.svg" alt="Instagram" className="w-5 h-5" />
            Follow on Instagram
          </a>
          <a
            href="https://discord.com/invite/4ZZCqMRTwQ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-150 hover:opacity-80"
            style={{
              border: "1px solid var(--border)",
              color: "var(--foreground)",
              fontFamily: "var(--font-geist-sans)",
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
          >
            <img
              src="image-assets/discord-icon-svgrepo-com.svg"
              alt="Discord"
              className="w-5 h-5"
            />
            Join our Discord
          </a>
        </div>
      </div>
    </main>
  );
}
