// AdCard.jsx
import React from 'react';
import styles from '../css/ad.module.css';

function AdCard({ image, title, description }) {
  return (
    <div className={styles.AdCard}>
      <img src={image} alt={title} className={styles.AdImage} />
      <div className={styles.AdContent}>
        <h3 className={styles.AdTitle}>{title}</h3>
        <p className={styles.AdDescription}>{description}</p>
      </div>
    </div>
  );
}

export default AdCard;
