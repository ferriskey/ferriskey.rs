// FerrisKey Core Team Data
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  location?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

export const coreTeam: TeamMember[] = [
  {
    id: "1",
    name: "Nathael Bonnal",
    role: "Co-Founder & Core Architect",
    avatar: "/core/nathael.jpeg",
    bio: "Passionate about software architecture and Rust, guides the technical vision of FerrisKey.",
    location: "Montpellier, France",
    github: "nathaelb",
    linkedin: "nathael-bonnal",
  },
  {
    id: "2",
    name: "Baptiste Parmantier",
    role: "Co-Founder & Software Engineer",
    avatar: "/core/baptiste.jpeg",
    bio: "Self-taught developer passionate about software development and open source technologies.",
    location: "Vendée, France",
    github: "sophiemartin",
    linkedin: "baptiste-parmantier",
  },
  {
    id: "3",
    name: "Guillaume Leroy",
    role: "Rust & Cloud Expert Consultant",
    avatar: "/core/guillaume.jpeg",
    bio: "Rust and cloud computing expert. Helps design scalable and high-performance solutions.",
    location: "Montpellier, France",
    github: "tbertrand",
    linkedin: "thomas-bertrand-dev",
  },
  {
    id: "4",
    name: "Joris Vilardell",
    role: "Software Engineer",
    avatar: "/core/joris.jpeg",
    bio: "Developer passionate about web technologies and backend development.",
    location: "Montpellier, France",
    github: "ZUHOWKS",
    linkedin: "joris-vilardell-76050427b/",
  },
  {
    id: "5",
    name: "Tristan Radulescu",
    role: "Software Engineer",
    avatar: "/core/tristan.jpeg",
    bio: "Full-stack developer passionate about open source technologies and innovation.",
    location: "Montpellier, France",
    github: "courtcircuits",
    linkedin: "tristan-mihai-radulescu-917859228",
    website: "https://courtcircuit.xyz/",
  },
];

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return coreTeam.find((member) => member.id === id);
};
