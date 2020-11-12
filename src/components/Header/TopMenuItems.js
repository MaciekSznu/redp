import React from "react";
import { Link } from "react-scroll";
import styles from "./TopMenuItems.module.scss";

class TopMenuItems extends React.Component {
  render() {
    return (
      <>
        <li>
          <Link
            to="inwestycja"
            spy={true}
            hashSpy={true}
            smooth={true}
            duration={500}
            className={styles.topMenuItem}
            activeClass={styles.topMenuItemActive}
            onClick={this.props.openMobileMenu}>
            Inwestycja
          </Link>
        </li>
        <li>
          <Link
            to="inwestor"
            spy={true}
            hashSpy={true}
            smooth={true}
            duration={500}
            className={styles.topMenuItem}
            activeClass={styles.topMenuItemActive}
            onClick={this.props.openMobileMenu}>
            Inwestor
          </Link>
        </li>
        <li>
          <Link
            to="mieszkania"
            spy={true}
            hashSpy={true}
            smooth={true}
            duration={500}
            className={styles.topMenuItem}
            activeClass={styles.topMenuItemActive}
            onClick={this.props.openMobileMenu}>
            Mieszkania
          </Link>
        </li>
        <li>
          <Link
            to="lokalizacja"
            spy={true}
            hashSpy={true}
            smooth={true}
            duration={500}
            className={styles.topMenuItem}
            activeClass={styles.topMenuItemActive}
            onClick={this.props.openMobileMenu}>
            Lokalizacja
          </Link>
        </li>
        <li>
          <Link
            to="kontakt"
            spy={true}
            hashSpy={true}
            smooth={true}
            duration={500}
            className={styles.topMenuItem}
            activeClass={styles.topMenuItemActive}
            onClick={this.props.openMobileMenu}>
            Kontakt
          </Link>
        </li>
      </>
    );
  }
}

export default TopMenuItems;
