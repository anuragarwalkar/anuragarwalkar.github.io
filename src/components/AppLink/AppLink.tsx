import React, { FC } from "react";

interface Props {
  className: string;
  href: string;
  target?: string;
  icon?: string;
}

export const AppLink: FC<Props> = (props) => {
  return (
    <a
      className={props.className}
      href={props.href}
      rel="noopener noreferrer"
      target={props.target ? props.target : "_blank"}
    >
      {props.icon && <i className={`fab fa-${props.icon} fa-lg`}></i>}
    </a>
  );
};
