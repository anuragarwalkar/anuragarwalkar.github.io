import React, { FC } from "react";
import styles from "./skill.module.scss";

const skill: FC<{ name: string; src: string; width: string }> = ({
  name,
  src,
  width,
}) => {
  return (
    <div>
      <img className={styles.skill} width={width} src={src} alt={name} />
    </div>
  );
};

export default skill;
