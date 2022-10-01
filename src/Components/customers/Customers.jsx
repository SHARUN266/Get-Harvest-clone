import React from "react";
import styles from "./customers.module.css";
import { ClientLogo } from "./ClientLogo";
import { CustomerCount } from "./CustomerCount";
import { FeaturedStory } from "./FeaturedStory";
import { CustomerHelp } from "./CustomerHelp";
import { Start } from "./Start";




export const Customers = () => {
    document.title="Customers"
   
  return (
    <div className={styles.customerContainer}>      
      <CustomerHelp />
      <CustomerCount />
      <FeaturedStory />
      <ClientLogo />
      <Start />
    </div>
  );
};
