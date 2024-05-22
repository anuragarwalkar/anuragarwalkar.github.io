import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  globant,
  excellarate,
  zensar,
  npm,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Node.js Developer",
    icon: backend,
  }
];

const technologies = [
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Designer",
    company_name: "Globant",
    icon: globant,
    iconBg: "#383E56",
    date: "Jan 2022 - Current",
    points: [
      "Developed an iOS/Android app using React Native for a health and fitness company, delivering digital fitness experiences.",
      "Revamped the existing Backbone web application to React.js, enhancing performance by 40%.",
      "Led the revamp of an app from Vue.js to React.js and introduced real-time video calling using WebRTC.",
      "Mentored junior developers, providing training on React.js, Angular, and Node.js."
    ],
  },
  {
    title: "Sr. Software Engineer",
    company_name: "Excellarate",
    icon: excellarate,
    iconBg: "#E6DEDD",
    date: "Dec 2020 - Jan 2022",
    points: [
      "Built an offline-first, cross-platform mobile app with React Native that dynamically renders UI based on a data dictionary and supports in-app updates.",
      "Enhanced an Angular app by modularizing it and improving its architecture, resulting in a 20% performance improvement."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Zensar Technologies",
    icon: zensar,
    iconBg: "#383E56",
    date: "Apr 2019 - Dec 2020",
    points: [
      "Revamped an existing Angular.js project to Angular 6, enhancing front-end performance by 35%.",
      "Developed a retry queue for file uploads using Cisco's Doc Central API in Node.js to enhance the user experience.",
      "Created a Microsoft Word scraper from scratch using Node.js to extract and validate DOCX files.",
      "Developed API endpoints for frontend developers and wrote integration test cases for backend and unit tests for UI.",
      "Designed CI/CD pipelines using GitHub Actions and mentored junior team members."
    ],
  }
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Node.js typescript boilerplate",
    description:
      "",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: npm,
    source_code_link: "https://github.com/",
  },

];

export { services, technologies, experiences, projects };
