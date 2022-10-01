import React from 'react'
import styles from './featuredStory.module.css';

export const FeaturedStory = () => {
  return (
    <div className={styles.featureContainer}>

      <div>
        <img src="https://www.getharvest.com/hs-fs/hubfs/customer-profile.jpg?width=1181&name=customer-profile.jpg" alt="featured picture" />
      </div>

      <div className={styles.textDiv}>
        <h1>FEATURED STORY</h1>
        <p>Startup studio Dovetail tracks time with Harvest to build trust with clients.</p>
        <button>Read Customer story</button>
      </div>

    </div>
  )
};
