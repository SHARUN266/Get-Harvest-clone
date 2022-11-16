import React from "react";
import styles from "./customerCount.module.css";

export const CustomerCount = () => {
  return (
    <div className={styles.countContainer}>

      <div className={styles.countDiv1}>
        <div>
          <h1>70,000+</h1>
          <p>customers</p>
        </div>
        <div>
          <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-person.svg" alt="avatar" />
        </div>
      </div>

      <div className={styles.countDiv2}>
        <div>
          <h1>2 billion</h1>
          <p>hours tracked</p>
        </div>
        <div>
          <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-keep.svg" alt="clock" />
        </div>
      </div>

      <div className={styles.countDiv3}>
        <div>
          <h1>19.6 million</h1>
          <p>invoices paid</p>
        </div>
        <div>
          <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-money.svg" alt="bill" />
        </div>
      </div>

    </div>
  );
};
