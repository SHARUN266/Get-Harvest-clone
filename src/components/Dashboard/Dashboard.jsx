import { Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import css from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <>
      <div className={css.parentFlex}>
        {" "}
        <div className={css.childFlex}>
          <p style={{ color: "#fa6652" }}>
            SEE WHY 70,000+ COMPANIES TRACK TIME WITH HARVEST
          </p>
          <h1>Finally, time tracking your team actually wants to use</h1>
          <ul>
            <li>
              <p>
                <span className={css.span}> Time Tracking. </span>
                Easy & intuitive time tracking that captures all your time
                without changing the way you work.
              </p>
            </li>

            <li>
              <p>
                <span className={css.span}>Reports & Analysis. </span>
                Instantly create reports across projects. Budgets, time, team
                capacity, cost breakdowns, and more.
              </p>
            </li>
            <li>
              <p>
                <span className={css.span}>Invoicing & Payments. </span>
                Turn tracked time into invoices. Accept online payments. Sync
                with QuickBooks and Xero.
              </p>
            </li>
          </ul>
          <div className={css.buttonsFlex}>
            <div>
              <Button className={css.buttons} backgroundColor="#fa5d00">
                Try Harvest free
              </Button>
              <div>
                <p>Free 30-day trial.</p>
              </div>
              <div>
                <p>No credit card required.</p>
              </div>
            </div>
            <div>
              <Button className={css.buttons} backgroundColor="#1d1e1c">
                See Pricing
              </Button>
            </div>
          </div>
        </div>
        <div className={css.childFlex}>
          <Image
            w="100%"
            src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/paycor/3012-Paycor-Contact-Sale/desktop-features-timesheets-new.png"
          />
        </div>
      </div>
      <p>
        <span>70,000+</span> companies track time with Harvest
      </p>
      <div className={css.imageFlex}>
        <Image
          className={css.brandImage}
          src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize"
        />
        <Image
          className={css.brandImage}
          src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize"
        />
        <Image
          className={css.brandImage}
          src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize"
        />
        <Image
          className={css.brandImage}
          src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize"
        />
        <Image
          className={css.brandImage}
          src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize"
        />
        <Image
          className={css.brandImage}
          src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-lululemon.svg?noresize"
        />
        <Image
          className={css.brandImage}
          src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-yale.svg?noresize"
        />
      </div>
    </>
  );
};

export default Dashboard;
