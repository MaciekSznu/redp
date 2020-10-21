import React from "react";
import styles from "./TopMenu.module.scss";
// import { Link } from 'react-scroll';
import Hamburger from "./TopMenuHamburger";
import TopMenuItems from "./TopMenuItems";


class TopMenu extends React.Component {

  state = {
    displayMobileMenu: false,
    width: 0,
    height: 0,
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({width: window.innerWidth, height: window.innerHeight});
    if (window.innerWidth >= 768) {this.setState({displayMobileMenu: false})};
  }

  openMobileMenu = (e) => {
    this.setState({
      displayMobileMenu: !this.state.displayMobileMenu,
    });
    e.preventDefault();
  };

  render() {

    const mobileMenuHidden = (!this.state.displayMobileMenu && this.state.width < 768);
    const mobileMenuOpen = (this.state.displayMobileMenu && this.state.width < 768);
    const desktopMenuOpen = (this.state.width >= 768);

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
        <ul className={topMenuWrapperStyle()}>
          { mobileMenuHidden &&
            <Hamburger className={styles.topMenuHamburger} openMobileMenu={this.openMobileMenu} isOpen={this.state.displayMobileMenu}/>
          }
          { mobileMenuOpen &&
            <Hamburger className={styles.topMenuHamburger} openMobileMenu={this.openMobileMenu} isOpen={this.state.displayMobileMenu}/>
          }
          { (desktopMenuOpen || mobileMenuOpen) && <TopMenuItems/> }
        </ul>
        {/* <div className={styles.scrollToTop}>
          <Link to='hero' smooth={true} duration={1000}>
            <span className={styles.scrollToTopIcon}>^</span>
          </Link>
        </div> */}
      </>
    );
  }
};

export default TopMenu;
