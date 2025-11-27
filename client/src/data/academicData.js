// src/data/academicData.js

export const educationEntries = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology, City, Country",
    dates: "Sep 2021 – Jun 2024",
    thesisTitle: "Low-Latency Scheduling in 6G Mobile Networks",
    highlights: [
      "Graduated with Honors (Magna Cum Laude).",
      "Specialized coursework in Wireless Communication Protocols and Systems Programming (Rust/C++).",
      "Developed a custom simulator in Python for testing network load under various QoS parameters."
    ],
    thesisLink: "https://example.com/view-thesis-document"
  },
  {
    id: 2,
    degree: "Network Programming Certification",
    institution: "Online Program / Institution",
    dates: "Jan 2021 – Apr 2021",
    highlights: ["Completed modules on socket programming and secure tunnel implementation."],
    thesisLink: null
  }
];

export const researchEntries = [
  {
    id: 101,
    title: "Performance Analysis of QUIC vs TCP on High-Latency Links",
    type: "Published Paper",
    summary: "Comparative study exploring transport protocol efficiency in simulated interstellar communication scenarios.",
    date: "Dec 2023",
    link: "https://www.researchgate.net/document/..."
  },
  {
    id: 102,
    title: "Rust for Embedded Systems: Safety Benchmark",
    type: "Project Report",
    summary: "Benchmarking memory consumption and execution speed of embedded Rust code vs. C on ARM architecture.",
    date: "Aug 2023",
    link: "https://github.com/yourusername/rust-embedded-report"
  }
];