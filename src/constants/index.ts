import projectTrackVault from "../assets/projects/TrackVault.png";
import projectTodo from "../assets/projects/Todo.png";
import projectSocialVideoApp from "../assets/projects/SocialVideoApp.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React, Angular and Next.js, as well as back-end technologies like Node.js, Spring Boot, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Angular, Next.js, Node.js, Java, Spring Boot, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "April 2023 - March 2025",
    role: "Full Stack Developer",
    company: "6Degree",
    description: `Led a team in developing and maintaining web applications using JavaScript, typescript, React.js, Angular, Next.js and Node.js. Implemented RESTful APIs and integrated with MySql and PostgreSQL databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: [
      "React.js",
      "Angular",
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],
  },
];

export const PROJECTS = [
  {
    title: "TrackVault",
    image: projectTrackVault,
    description:
      "A full-stack finance tracking app where users can create an account, log income and expenses, filter transactions by month or year, and visualize insights with interactive bar charts.",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCss",
      "Shadcn",
      "TanStack Query",
      "PostgreSQL",
      "Prisma",
    ],
    link: "https://track-vault-six.vercel.app",
    github: "https://github.com/AshishDev0/track-vault",
  },
  {
    title: "Social Video App",
    image: projectSocialVideoApp,
    description:
      "A full-stack finance tracking app where users can create an account, log income and expenses, filter transactions by month or year, and visualize insights with interactive bar charts.",
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "zustand",
      "oauth",
      "Sanity",
    ],
    link: "https://tik-tik-wine.vercel.app/",
    github: "https://github.com/AshishDev0/SocialMediaApp",
  },
  {
    title: "Task Management App",
    image: projectTodo,
    description:
      "A full-stack task management app, allowing users to create, update, and delete tasks with a clean and responsive UI. Features include priority settings and seamless synchronization between frontend and backend.",
    technologies: [
      "React",
      "Redux",
      "Tailwind",
      "Shadcn",
      "Node.js",
      "Express",
      "Mongodb",
      "Mongoose",
    ],
    link: "https://todo-mern-wheat-eta.vercel.app",
    github: "https://github.com/AshishDev0/Todo-MERN",
  },
];

export const CONTACT = {
  address: "Btm Layout Stage 1, Bangalore, Karnataka, India ",
  phoneNo: "+91 8541070804 ",
  email: "iamashishchowdhary@gmail.com",
};
