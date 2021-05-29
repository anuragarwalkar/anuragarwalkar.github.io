import React from "react";
import angularImage from "../../assets/img/angular.png";
import flutterImage from "../../assets/img/Google-flutter-logo.png";
import nodeImage from "../../assets/img/Node.js_logo.png";
import reactImage from "../../assets/img/React.js_logo-512.png";
import Skill from "./skill";
import styles from "./skill.module.scss";

interface SkillItem {
  name: string;
  img: string;
  id: number;
  width: string;
}

const skillItems: SkillItem[] = [
  { name: "React", id: 1, img: reactImage, width: "50" },
  { name: "Angular", id: 2, img: angularImage, width: "50" },
  { name: "Flutter", id: 4, img: flutterImage, width: "100" },
  { name: "Node.js", id: 3, img: nodeImage, width: "80" },
];

const Skills = () => {
  return (
    <div id="#skills" className={styles.mainContainer}>
      <div className={styles.skillsContainer}>
        {skillItems.map((skillItem: SkillItem) => (
          <Skill
            key={skillItem.id}
            width={skillItem.width}
            name={skillItem.name}
            src={skillItem.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
