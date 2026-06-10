export interface LeadershipMember {
  title: string;
  name: string;
  image: string;
  linkedin: string;
}

export const leadership: LeadershipMember[] = [
  {
    title: "President",
    name: "Patrick Smith",
    image: "/image-assets/leadership_photos/patsmithgaming.jpg",
    linkedin: "https://www.linkedin.com/in/patrick-o-smith/",
  },
  {
    title: "Vice President",
    name: "Gavin Wu",
    image: "/image-assets/leadership_photos/Gavin.webp",
    linkedin: "https://www.linkedin.com/in/zhenglun-gavin-wu/",
  },
  {
    title: "Treasurer",
    name: "Jonathan Zhong",
    image: "/image-assets/leadership_photos/default.png",
    linkedin: "https://www.linkedin.com/in/jonathan-zhong-378977327/",
  },
  {
    title: "Secretary",
    name: "Eric Song",
    image: "/image-assets/leadership_photos/eric.png",
    linkedin: "https://www.linkedin.com/in/eric-song-0b6980274",
  },
  {
    title: "Membership Director",
    name: "Peter Lin",
    image: "/image-assets/leadership_photos/peter_being_a_stud.jpg",
    linkedin: "https://www.linkedin.com/in/peter-q-lin/",
  },
];
