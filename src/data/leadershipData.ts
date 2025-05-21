export interface LeadershipRole {
  organization: string;
  position: string;
  location: string;
  period: string;
  achievements: string[];
  skills?: string[];
}

export const leadershipData: LeadershipRole[] = [
  {
    organization: "City Entrepreneurship Club",
    position: "Partnerships Officer",
    location: "London, United Kingdom",
    period: "Oct 2022 - Jun 2023",
    achievements: [
      "Elected as founding committee for the club and worked with entrepreneurs in London by hosting events and talks for society members.",
      "Established partnerships with tech startups and organized educational events for aspiring entrepreneurs."
    ],
    skills: ["Partnership Development", "Event Organization", "Networking", "Startup Ecosystem"]
  },
  {
    organization: "Malaysians of Melbourne University",
    position: "President",
    location: "Melbourne, Australia",
    period: "Sep 2018 - Sep 2019",
    achievements: [
      "Managed $52,000 AUD budget and led 45-member team, growing membership to 1,100 active members through data-driven strategies.",
      "Won Best Camp of the Year award at UMSU Award night while raising record levels of club sponsorship."
    ],
    skills: ["Leadership", "Budget Management", "Team Management", "Strategic Planning", "Event Management"]
  },
  {
    organization: "Malaysians of Melbourne University",
    position: "Assistant Sponsorship Director",
    location: "Melbourne, Australia",
    period: "Sep 2017 - Sep 2018",
    achievements: [
      "Reinvigorated sponsorship program, raising $13000 AUD in financial sponsorship from corporate and non-corporate sponsors.",
      "Recruited 42 sponsors within 1 year, making a new record for largest cultural club in the University of Melbourne.",
      "Presented sponsorship proposals to large corporate sponsors such as Deloitte and Central Equity, and numerous non-corporate sponsors with club statistics and future direction."
    ],
    skills: ["Sponsorship Management", "Relationship Building", "Negotiation", "Presentation Skills"]
  },
  {
    organization: "Grand Malaysian Ball",
    position: "Assistant Entertainment Director",
    location: "Melbourne, Australia",
    period: "Mar 2018 - Sep 2018",
    achievements: [
      "Arranged auditions to select best talent for ball's entertainment.",
      "Facilitated communication between guests, emcee and ball's organizing committee. Operated video camera and sound equipment for a ball of 300 participants.",
      "Planned and executed event flow and structure for 300 participants within 2 months."
    ],
    skills: ["Event Planning", "Talent Management", "AV Equipment", "Team Coordination"]
  }
];