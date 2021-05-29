import React, { FC } from "react";
import chatBuddy from "../../assets/img/chat_buddy.png";
import npmCreateNode from "../../assets/img/npm.jpg";
import spaceX from "../../assets/img/space-x.png";
import weatherApp from "../../assets/img/weather_app.png";
import useTitle from "../../hooks/useTitle";

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
  return (
    <article style={{ width: 280 }}>
      <img
        src={props.img}
        style={{ width: 280, height: 180, objectFit: "cover" }}
        alt={props.name}
      />
      <div style={{ fontWeight: "bold", marginBottom: "2px" }}>
        {props.name}
      </div>
      <div style={{ opacity: 0.8 }}>{props.description}</div>
      <a href={props.link}>👉 Live Url</a>
    </article>
  );
};

const Projects: FC<{}> = (props) => {
  useTitle("Projects");

  return (
    <div
      id="#projects"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      {projectItems.map((item) => (
        <Project
          link={item.url}
          name={item.name}
          description={item.description}
          img={item.src}
        />
      ))}
    </div>
  );
};

export default Projects;
