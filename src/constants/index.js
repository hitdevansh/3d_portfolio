import {
  memory,
  weather,
  mobile,
  backend,
  creator,
  amazon,
  astniq,
  cpp,
  bie,
  da,
  aws,
  etl,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  python,
  sql,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ai,
  canva,
  django,
  ec,
  pnl,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Business Intelligence Engineer",
    icon: bie,
  },
  {
    title: "Data Analyst",
    icon: da,
  },
  {
    title: "ETL Developer",
    icon: etl,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AWS Cloud Practitioner",
    icon: aws,
  },
  {
    title: "AI Enthusiast",
    icon: ai,
  },
];


const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
   {
    name: "Python",
    icon: python,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
   {
    name: "Django",
    icon: django,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Canva",
    icon: canva,
  },
  
];


const experiences = [
  {
  title: "Business Intelligence Engineer",
  company_name: "Amazon",
  icon: amazon,
  iconBg: "#232F3E",
  date: "Aug 2025 - Present",
  points: [
    "Full-time member of Amazon’s Global Finance Audit (GFA) team driving in-house recovery of billing and financial discrepancies.",
    "Identified and recovered revenue by auditing vendor and internal billing transactions, uncovering overcharges, leakage, and control gaps.",
    "Designed and automated in-house audit and recovery dashboards using SQL, Redshift, and Tableau, reducing dependency on external vendors.",
    "Enabled proactive detection of recoverable amounts through data-driven controls, increasing recovery speed and accuracy.",
    "Partnered with finance, operations, and tech teams to resolve findings and institutionalize in-house recovery processes.",
    ],
  },
  {
    title: "Business Intelligence Engineer Intern",
    company_name: "Amazon",
    icon: amazon, // replace with your Amazon logo import
    iconBg: "#232F3E",
    date: "Jan 2025 - July 2025",
    points: [
      "Engineered and automated headcount and Merch P&L Tableau dashboards, eliminating manual reporting across US & EU5 regions.",
      "Enhanced reporting accuracy and saved over 2,100+ hours annually through automation.",
      "Optimized Redshift pipelines by migrating 24-partitioned S3 data for improved performance.",
      "Delivered 30+ SQL queries to support Month-End Close for 12+ analysts with centralized documentation.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Astniq",
    icon: astniq, 
    iconBg: "#383E56",
    date: "May 2024 - July 2024",
    points: [
      "Led a 5-person team to design and develop an online learning platform simulating an educational ecosystem.",
      "Implemented educator task and resource features to enhance interactivity and reduce assignment workflow time by 20%.",
      "Collaborated with team members to ensure responsive design and smooth user experience.",
      "Contributed to both frontend and backend development using modern web technologies.",
    ],
  },

 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];


const projects = [
  {
    name: "US Merch P&L Automation",
    description:
      "Automated Monthly Profit & Loss reporting for US and EU5 regions using ETL workflows, SQL, and AWS integrating datasets into Tableau dashboards for real-time financial insights and saving 650+ manual hours annually.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
      {
        name: "tableau",
        color: "orange-text-gradient",
      },
    ],
    image: pnl, 
  },
  {
    name: "E-commerce Website",
    description:
      "A full-stack e-commerce platform built with Django, offering a modern UI with catalog, cart, and checkout functionality optimized SQLite queries reduced response time by 20%.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "jquery",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
    ],
    image: ec,
    source_code_link: "https://github.com/hitdevansh/e-commerce-r",
    live_project: "https://e-commerce-r-lyart.vercel.app/",
  },
  {
    name: "Memory Game",
    description:
      "An interactive Valorant-themed browser memory game featuring flip animations, dynamic scoring, and smooth transitions, reducing load times by 10%.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: memory, 
    source_code_link: "https://github.com/hitdevansh/Memory_game",
    live_project : "https://valorant-memory-game-eta.vercel.app",
  },
  {
    name: "Weather App",
    description:
      "A dynamic weather forecast web app built with Express.js and Handlebars, fetching real-time data from the OpenWeather API. It allows users to search for any city worldwide and displays temperature, humidity, and condition details with an interactive UI.",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "hbs",
        color: "pink-text-gradient",
      },
      {
        name: "api",
        color: "orange-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/hitdevansh/weathersite",
    live_project: "https://weather-site-ochre.vercel.app/",
  }

];

export { services, technologies, experiences, testimonials, projects };
