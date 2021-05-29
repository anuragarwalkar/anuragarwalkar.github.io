import React, { FC } from "react";
import useTitle from "../../hooks/useTitle";

const Project: FC<{}> = (props) => {
  useTitle("Projects");

  return <div id="#about">projects screen</div>;
};

export default Project;
