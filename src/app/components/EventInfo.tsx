import React from 'react';
import styles from './EventInfo.module.css';

const EventInfo = () => {
  return (
    <div>
      <div className={styles.eventHeader}>Event Information</div>
      <div className={styles.eventContainer}>
        <div className={styles.title}>
          Poker Lecture 1
        </div>
        <div className={styles.subtitle}>
          What is a range?
        </div>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  );
}

export default EventInfo;