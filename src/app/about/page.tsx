export default function About() {

  const leadership = [
    {
      title: "President",
      name: "Patrick Smith",
      image: "/image-assets/leadership_photos/default.png",
      linkedin: "https://www.linkedin.com/in/patrick-o-smith/"
    },
    {
      title: "Vice President",
      name: "Kevin Zhang",
      image: "/image-assets/leadership_photos/default.png",
      linkedin: "https://www.linkedin.com/in/kevin-y-zhang/"
    },
    {
      title: "Treasurer",
      name: "Rose Zhang",
      image: "/image-assets/leadership_photos/rose_profile.png",
      linkedin: "https://www.linkedin.com/in/rose-zhang-m/"
    },
    {
      title: "Secretary",
      name: "Owen Vela",
      image: "/image-assets/leadership_photos/default.png",
      linkedin: "https://www.linkedin.com/in/owen-vela/"
    },
    {
      title: "Membership Director",
      name: "Peter Lin",
      image: "/image-assets/leadership_photos/peter_being_a_stud.jpg",
      linkedin: "https://www.linkedin.com/in/peter-q-lin/"
    },
  ];

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Lectures</h2>
            <p className="mt-2">GTO Illini presents regular lectures on a variety of poker topics, ranging from the basics to deep dives into advanced concepts. Check out our events page to make sure you don't miss any, and our resources page to take a look at past lectures.</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Development</h2>
            <p className="mt-2">To make poker learning as accessible as possible, GTO Illini is constantly developing new poker learning software for members to make use of. Check out our resources page to start using our tools and upping your game!</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Competitions</h2>
            <p className="mt-2">Poker is difficult to study practically without experience, so we hold regular online competitions to sharpen your knowledge and test your skills!</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Leadership</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mt-4">
              {leadership.map((leader, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading="lazy"
                    width="800"
                    height="800"
                    decoding="async"
                    className="aspect-square w-full max-w-56 max-h-56 object-cover rounded-full mb-2" // Added styling for image
                  />
                  <h3 className="text-xl font-bold">{leader.title}</h3>
                  <p className="text-l font-bold">{leader.name}</p>
                </div>
              ))}
            </div>
        </div>

    </main>
  );
}