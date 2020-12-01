import React from "react";
import styles from "./HeroView.module.scss";
import { Link } from "react-scroll";
import { ReactComponent as PatternLeft } from "../../assets/helpers/pattern-left.svg";
import { ReactComponent as PatternRight } from "../../assets/helpers/pattern-right.svg";

const HeroView = () => {
  return (
    <>
      <div className={styles.heroImageContainer}>
        <h1 className={styles.heroImageText}>Osiedle Koralowa II</h1>
        <h1 className={styles.heroImageAdditionalText}>Znajdź swoje miejsce na ziemi</h1>
        <Link to="mieszkania" spy={true} hashSpy={true} smooth={true} duration={1000}>
          <button className={styles.heroButton}>wybierz mieszkanie</button>
        </Link>
        <PatternLeft className={styles.PatternLeft} />
        <PatternRight className={styles.PatternRight} />
      </div>
    </>
  );
};

export default HeroView;
