import type { Education, Experience } from "../types/content";

export const experience: Experience[] = [
  {
    organization: "Jabil (Eastridge contract)",
    role: "Medical Device Assembler",
    period: "April 2026–present",
    location: "Clinton, Massachusetts",
    summary:
      "Precision assembly and visual inspection in a regulated medical-device manufacturing environment.",
    highlights: [
      "Follow documented work instructions and maintain procedural accuracy across 12-hour shifts.",
      "Identify component defects and escalate nonconforming material to support quality and traceability.",
      "Work with a team across manual and semi-automated production stations.",
    ],
    verification: "verified",
  },
  {
    organization: "IoT Research and Application Lab (IoT-ra)",
    role: "IoT Research and Development Intern",
    period: "2025–2026",
    location: "Kampala, Uganda",
    summary:
      "Connected-device research spanning sensing, communications, embedded hardware, and application software.",
    highlights: [
      "Contributed hardware and software to adaptive communications using LoRaWAN, GSM, and Wi-Fi.",
      "Integrated sensing and communications for beehive monitoring and an automated mushroom environment.",
      "Diagnosed device-integration issues and documented work with researchers and developers.",
    ],
    verification: "verified",
  },
];

export const education: Education[] = [
  {
    institution: "Middlesex Community College",
    program: "A.S. Engineering Science — Electrical & Computer Engineering",
    period: "In progress · 2026–present",
    detail: "Bedford, Massachusetts",
    verification: "verified",
  },
  {
    institution: "Makerere University",
    program: "Software Engineering coursework",
    period: "2023–2026",
    detail: "108 U.S.-equivalent semester credits · GPA 3.53 · WES evaluation",
    verification: "verified",
  },
];

export const skills = [
  { group: "Support", items: "Windows, Linux, troubleshooting, device setup, permissions, logs, documentation" },
  { group: "Networks", items: "TCP/IP, DNS, DHCP, Wi-Fi, IP addressing, packet-capture fundamentals" },
  { group: "Software", items: "Python, Java, PHP, C, SQL, APIs, Git, testing, Docker" },
  { group: "Connected systems", items: "LoRaWAN, GSM, Wi-Fi, sensors, ESP32/Arduino-class devices" },
];
