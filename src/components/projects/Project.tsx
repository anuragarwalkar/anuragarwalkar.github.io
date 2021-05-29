import React, { FC } from "react";
import useTitle from "../../hooks/useTitle";

const Project: FC<{}> = (props) => {
  useTitle("Projects");

  return (
    <div id="#projects">
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Project;
