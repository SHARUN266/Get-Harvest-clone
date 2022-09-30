import React from 'react'
import styles from './start.module.css';

export const Start = () => {
  return (
      <div className={styles.startContainer}>

        <div className={styles.startDiv}>
            <h1>Start tracking time today</h1>
            <p>Join 70,000+ companies spending their time wisely with Harvest.</p>
            <div>
                <button>Try Harvest free</button>
                <p>Free 30-day trial. No credit card required.</p>
            </div>
        </div>

        <div>
            <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg" alt="laptop" />
        </div>

      </div>
  )
};
