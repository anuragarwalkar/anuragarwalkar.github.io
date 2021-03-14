import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./NavLink.module.scss";

export interface NavLinkProps {}

const NavLink: FC<NavLinkProps> = () => {
  return (
    <div className={styles.navbarMenu}>
      <Link to="/home" className={styles.navBarLink}>
        Home
      </Link>

      <Link to="/projects" className={styles.navBarLink}>
        Projects
      </Link>

      <Link to="/contact" className={styles.navBarLink}>
        Contact
      </Link>

      <Link to="/about" className={styles.navBarLink}>
        About
      </Link>
    </div>
  );
};

export default NavLink;
