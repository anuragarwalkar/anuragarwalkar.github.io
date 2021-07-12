import React, { FC } from "react";
import chatBuddy from "../../assets/img/chat_buddy.png";
import npmCreateNode from "../../assets/img/npm.jpg";
import spaceX from "../../assets/img/space-x.png";
import weatherApp from "../../assets/img/weather_app.png";
import useTitle from "../../hooks/useTitle";
import styles from "./project.module.scss";

interface ProjectItem {
  name: string;
  description: string;
  src: string;
  key: number;
  url: string;
}

const projectItems: ProjectItem[] = [
  {
    key: 1,
    name: "Chat Buddy",
    description:
      " Realtime messaging application built using Angular, Node.js, Websockets",
    src: chatBuddy,
    url: "https://chat-buddy-289610.web.app/auth",
  },
  {
    key: 3,
    name: "Live Weather Application",
    description:
      "Buit a responsive weather application form Mobile and Desktop using Angular",
    src: weatherApp,
    url: "https://anuragarwalkar.github.io/my-weather-app/",
  },
  {
    key: 2,
    name: "Create Node TypeScript App",
    description:
      "Build a NPM pacakge to create a boilerplate for a node.js project with express.",
    src: npmCreateNode,
    url: "https://www.npmjs.com/package/create-nodejs-typescript-app",
  },
  {
    key: 4,
    name: "React SSR",
    description:
      "Build a server side rendering website using React and spaceX API",
    src: spaceX,
    url: "https://spacex-anurag.herokuapp.com/?limit=100",
  },
];

const Project: FC<{
  name: string;
  description: string;
  img: string;
  link: string;
}> = (props) => {
  const onNaviate = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <article
      onClick={() => onNaviate(props.link)}
      className={styles.mainArticle}
    >
      <img src={props.img} className={styles.articleImage} alt={props.name} />
      <div className={styles.articleBody}>{props.name}</div>
      <div className={styles.articleDescription}>{props.description}</div>
      <a href={props.link}>👉 Live Url</a>
    </article>
  );
};

const Projects: FC<{}> = () => {
  useTitle("Projects");

  return (
    <div>
      <div className={styles.projectTitle}>Projects</div>
      <div id="#projects" className={styles.projects}>
        {projectItems.map((item) => (
          <Project
            key={item.key}
            link={item.url}
            name={item.name}
            description={item.description}
            img={item.src}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
