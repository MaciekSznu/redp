import React from 'react';
import styles from './HeroView.module.scss';
 
const HeroView = () => {
  return (
    <>
      <div className={styles.heroImageContainer}>
        <h1 className={styles.heroImageText}>Osiedle Koralowa II</h1>
        <button className={styles.heroButton}>wybierz mieszkanie</button>
      </div>
    </>
  );
};

export default HeroView;
