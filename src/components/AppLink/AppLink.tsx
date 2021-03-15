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

AppLink.propTypes = {
  href: (props, propName, componentName) => {
    let error = null;
    const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
    if (!regex.test(props[propName])) {
      error = new Error(
        `Invalid prop ${propName} passed to ${componentName}. Expected a valid url.`
      );
    }

    return error;
  },
};
