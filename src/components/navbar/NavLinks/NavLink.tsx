import React, { FC } from "react";
import styles from "./NavLink.module.scss";

export interface NavLinkProps {}

const NavLink: FC<NavLinkProps> = () => {
  return (
    <div className={styles.navbarMenu}>
      <a href="#about" className={styles.navBarLink}>
        About
      </a>
      <a href="#skills" className={styles.navBarLink}>
        Skills
      </a>
      <a href="#projects" className={styles.navBarLink}>
        Projects
      </a>
    </div>
  );
};

export default NavLink;
