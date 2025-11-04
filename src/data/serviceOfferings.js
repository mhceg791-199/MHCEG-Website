// import s1 from '../assets/serivies/offerings/1.webp';
// import s2 from '../assets/serivies/offerings/2.webp';
// import s3 from '../assets/serivies/offerings/3.webp';
// import s4 from '../assets/serivies/offerings/4.webp';

// const  serviceOfferings = [
//    {
//     image: `${s1}`,
//     text: "Visionary designs that balance functionality, aesthetics, and sustainability.",
//     title: "Architecture Engineering",
//   },
//   {
//     image:`${s2}`,
//     text: "Strategic planning to shape dynamic, livable, and resilient cities.",
//     title: "Urban Design",
//   },
//   {
//     image:`${s3}`,
//     text: "Harmonious outdoor spaces that enhance environmental and social value.",
//     title: "Landscape Design",
//   },
//   {
//     image: `${s4}`,
//     text: "Robust, innovative frameworks ensuring safety and longevity.",
//     title: "Structural Design",
//   },

// ];

// export default serviceOfferings;

import s1 from "../assets/serivies/offerings/1.webp";
import s2 from "../assets/serivies/offerings/2.webp";
import s3 from "../assets/serivies/offerings/3.webp";
import s4 from "../assets/serivies/offerings/4.webp";

const serviceOfferings = [
  {
    image: s1,
    title: "Integrated Architecture & Engineering",
    text: `
    We create environments that combine imagination with precision — designs that are functional, sustainable, and human-centered.
    Our multidisciplinary teams collaborate across architecture, urban planning, landscape, and structural design to deliver spaces that perform as beautifully as they look.`,
    description: [
      {
        head: "Architecture & Engineering:",
        desc: "Visionary design that balances creativity, performance, and sustainability.",
      },
      {
        head: "Urban Design & Planning:",
        desc: "Future-ready cities shaped for connection, culture, and resilience.",
      },
      {
        head: "Landscape Architecture:",
        desc: "Outdoor spaces that enhance ecological and social value.",
      },
      {
        head: "Structural Engineering:",
        desc: "Innovative, robust frameworks built with safety at their core.",
      },
    ],
    end: "We design with intent, engineer with integrity, and build with people in mind.",
  },
  {
    image: s2,
    title: "Smart Infrastructure & Mobility",
    text: `
We engineer systems that move economies and connect people.
From highways and bridges to smart cities and utilities, our infrastructure solutions are designed to meet tomorrow’s demands — safely, efficiently, and sustainably.`,
    description: [
      {
        head: "Infrastructure Engineering:",
        desc: "Scalable systems that support urban and industrial growth.",
      },
      {
        head: "Transportation Systems:",
        desc: "Intelligent mobility networks that drive accessibility and efficiency.",
      },
      {
        head: "Water & Environmental Systems:",
        desc: "Sustainable solutions for resource management and environmental protection.",
      },
    ],
    end: "Our infrastructure isn’t just built to last — it’s built to adapt.",
  },
  {
    image: s3,
    title: "Energy & Industrial Excellence",
    text: `
Progress runs on power — and precision.
We deliver end-to-end engineering for the energy, industrial, and oil & gas sectors, combining innovation with rigorous safety and performance standards.`,
    description: [
      {
        head: "Power Generation & Energy Systems:",
        desc: "Sustainable, reliable, and future-focused energy solutions.",
      },
      {
        head: "Oil & Gas Engineering:",
        desc: "Precision-driven design and operations for complex industrial projects.",
      },
      {
        head: "Industrial & Manufacturing Facilities:",
        desc: "Smart, high-performance environments that enhance productivity and scalability.",
      },
    ],
    end: "We engineer efficiency — from energy grids to factory floors.",
  },
  {
    image: s4,
    title: "Project Leadership & Delivery",
    text: `
Every successful project begins with clear leadership and ends with flawless execution.
Our teams manage the full lifecycle — from vision and planning to supervision and delivery — ensuring every phase meets MHCEG’s standards of excellence, safety, and accountability.`,
    description: [
      {
        head: "Project Management:",
        desc: "Strategic oversight that keeps vision, time, and cost perfectly aligned.",
      },
      {
        head: "Construction Supervision:",
        desc: "On-site leadership enforcing precision, safety, and quality at every stage.",
      },
    ],
    end: "We don’t just deliver projects — we deliver confidence.",
  },
];

export default serviceOfferings;
