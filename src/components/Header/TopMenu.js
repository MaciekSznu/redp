import React from "react";
import styles from "./TopMenu.module.scss";
// import { Link } from 'react-scroll';
import Hamburger from "./TopMenuHamburger";
import TopMenuItems from "./TopMenuItems";
import SocialMenuBanner from "../SocialMenuBanner/SocialMenuBanner";
import { ReactComponent as HexagonLogoWrapper } from "../../assets/helpers/hexagon-logo-wrapper.svg";
import { ReactComponent as MobileMenuPattern } from "../../assets/helpers/mobile-menu-pattern.svg";

class TopMenu extends React.Component {
  state = {
    displayMobileMenu: false,
    width: 0,
    height: 0,
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (window.innerWidth >= 768) {
      this.setState({ displayMobileMenu: false });
    }
  };

  openMobileMenu = (e) => {
    this.setState({
      displayMobileMenu: !this.state.displayMobileMenu,
    });
    e.preventDefault();
  };

  render() {
    const mobileMenuHidden = !this.state.displayMobileMenu && this.state.width < 768;
    const mobileMenuOpen = this.state.displayMobileMenu && this.state.width < 768;
    // const desktopMenuOpen = this.state.width >= 768;

    const topMenuWrapperStyle = () => {
      if (mobileMenuHidden) {
        return styles.topMenuWrapperMobileHidden;
      } else if (mobileMenuOpen) {
        return styles.topMenuWrapperMobileOpen;
      } else {
        return styles.topMenuWrapper;
      }
    };

    return (
      <>
        <HexagonLogoWrapper className={styles.hexagonLogoWrapper} />
        {mobileMenuHidden && (
          <div className={styles.hamburgerWrapper}>
            <Hamburger
              className={styles.topMenuHamburger}
              openMobileMenu={this.openMobileMenu}
              isOpen={this.state.displayMobileMenu}
            />
          </div>
        )}
        {mobileMenuOpen && (
          <div className={styles.hamburgerWrapper}>
            <Hamburger
              className={styles.topMenuHamburger}
              openMobileMenu={this.openMobileMenu}
              isOpen={this.state.displayMobileMenu}
            />
          </div>
        )}
        <ul className={topMenuWrapperStyle()}>
          <TopMenuItems openMobileMenu={this.openMobileMenu} />
          {this.state.width < 768 ? (
            <>
              <MobileMenuPattern className={styles.mobileMenuPatternTop} />
              <li className={styles.additionalItem}>
                <a className={styles.phoneNumber} href="tel:+48602755332">
                  602 755 332
                </a>
              </li>
              <SocialMenuBanner />
              <MobileMenuPattern className={styles.mobileMenuPatternBottom} />
            </>
          ) : null}
        </ul>
        {/* <div className={styles.scrollToTop}>
          <Link to='hero' smooth={true} duration={1000}>
            <span className={styles.scrollToTopIcon}>^</span>
          </Link>
        </div> */}
      </>
    );
  }
}

export default TopMenu;
