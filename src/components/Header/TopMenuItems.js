import React from 'react';
import { Link } from 'react-scroll';
import styles from './TopMenuItems.module.scss';
 
const TopMenuItems = () => {
  return (
    <>
      <li>
        <Link to='inwestycja' spy={true} hashSpy={true} smooth={true} duration={500} className={styles.topMenuItem} activeClass={styles.topMenuItemActive}>Inwestycja</Link>
      </li>
      <li>
        <Link to='inwestor' spy={true} hashSpy={true} smooth={true} duration={500} className={styles.topMenuItem} activeClass={styles.topMenuItemActive}>Inwestor</Link>
      </li>
      <li>
        <Link to='mieszkania' spy={true} hashSpy={true} smooth={true} duration={500} className={styles.topMenuItem} activeClass={styles.topMenuItemActive}>Mieszkania</Link>
      </li>
      <li>
        <Link to='lokalizacja' spy={true} hashSpy={true} smooth={true} duration={500} className={styles.topMenuItem} activeClass={styles.topMenuItemActive}>Lokalizacja</Link>
      </li>
      <li>
        <Link to='kontakt' spy={true} hashSpy={true} smooth={true} duration={500} className={styles.topMenuItem} activeClass={styles.topMenuItemActive}>Kontakt</Link>
      </li>
    </>
  );
};

export default TopMenuItems;
