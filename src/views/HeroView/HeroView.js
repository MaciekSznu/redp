import React from 'react';
import styles from './HeroView.module.scss';
import { ReactComponent as PatternLeft } from "../../assets/helpers/pattern-left.svg";
import { ReactComponent as PatternRight } from "../../assets/helpers/pattern-right.svg";

 
const HeroView = () => {
  return (
    <>
      <div className={styles.heroImageContainer}>
        <h1 className={styles.heroImageText}>Osiedle Koralowa II</h1>
        <button className={styles.heroButton}>wybierz mieszkanie</button>
        <PatternLeft className={styles.PatternLeft} />
        <PatternRight className={styles.PatternRight} />
      </div>
    </>
  );
};

export default HeroView;
