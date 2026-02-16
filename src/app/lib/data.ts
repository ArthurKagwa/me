import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Itungo",
    description:
      "Itungo is a simple, practical animal farm management tool for farmers. A comprehensive solution to track livestock, monitor health, and manage farm operations efficiently.",
    tech: ["Next.js", "Microservices", "PostgreSQL"],
    impact: "Farming the smart way.",
    link: "https://itungo.com",
    highlights: [
      "Real-time livestock tracking and health monitoring",
      "Microservices architecture for scalability",
      "Intuitive dashboard for farm operations management",
      "Data-driven insights for better decision making",
    ],
  },
  {
    id: "2",
    title: "Tundamate",
    description:
      "Track inventory, process sales, manage your team, and grow your business with TundaMate. A complete business management solution built for small businesses.",
    tech: ["FastAPI", "Next.js"],
    impact: "Built for small businesses.",
    link: "https://tundamate.xyz",
    highlights: [
      "Comprehensive inventory management system",
      "Point-of-sale integration for seamless transactions",
      "Team management and role-based access control",
      "Analytics dashboard for business insights",
    ],
  },
  // {
  //   id: "3",
  //   title: "Prodomate",
  //   description:
  //     "A productivity platform designed to help teams and individuals manage tasks, track progress, and achieve their goals efficiently.",
  //   tech: ["Next.js", "TypeScript", "PostgreSQL"],
  //   impact: "Empowering productivity at scale",
  //   link: "https://prodomate.com",
  //   highlights: [
  //     "Task management with smart prioritization",
  //     "Team collaboration features",
  //     "Progress tracking and analytics",
  //     "Integration with popular productivity tools",
  //   ],
  // },
  // {
  //   id: "4",
  //   title: "ECO-COPS",
  //   description:
  //     "An environmental monitoring and community policing system focused on promoting sustainable practices and protecting our environment through technology.",
  //   tech: ["Python", "Django", "IoT", "React"],
  //   impact: "Technology for environmental sustainability",
  //   highlights: [
  //     "Real-time environmental data monitoring",
  //     "Community-driven environmental reporting",
  //     "IoT sensor integration for air quality monitoring",
  //     "Data visualization for environmental insights",
  //   ],
  // },
];
