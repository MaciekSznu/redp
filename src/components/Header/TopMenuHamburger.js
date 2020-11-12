import React from "react";
import styles from "./TopMenuHamburger.module.scss";

class Hamburger extends React.Component {
  render() {
    const style = this.props.isOpen ? styles.hamburgerActive : styles.hamburger;

    return (
      <button className={style} onClick={this.props.openMobileMenu}>
        <span className={styles.hamburgerBox}>
          <span className={styles.hamburgerInner}></span>
        </span>
      </button>
    );
  }
}

export default Hamburger;
