import { Image } from "@chakra-ui/react";
import React from "react";
import css from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <>
      <div className={css.parentFlex}>
        <div className={css.childFlex}>
          <p
            style={{
              color: "#fa6652",
              fontWeight: "bold",
              margin: "20px 20px 20px 0px",
            }}
          >
            SEE WHY 70,000+ COMPANIES TRACK TIME WITH HARVEST
          </p>
          <h1 className={css.big}>
            Finally, time tracking your team actually wants to use
          </h1>
          <ul className={css.ul}>
            <li className={css.li}>
              <p>
                <span className={css.span}>Time Tracking. </span>
                Easy & intuitive time tracking that captures all your time
                without changing the way you work.
              </p>
            </li>

            <li className={css.li}>
              <p>
                <span className={css.span}> Reports & Analysis. </span>
                Instantly create reports across projects. Budgets, time, team
                capacity, cost breakdowns, and more.
              </p>
            </li>
            <li className={css.li}>
              <p>
                <span className={css.span}>Invoicing & Payments. </span>
                Turn tracked time into invoices. Accept online payments. Sync
                with QuickBooks and Xero.
              </p>
            </li>
          </ul>
          <div className={css.buttonsFlex}>
            <div>
              <button
                className={css.buttons}
                style={{
                  backgroundColor: "#fa5d00",
                }}
              >
                Try Harvest free
              </button>
              <div
                className={css.li}
                style={{
                  padding: "0px",
                  display: "flex",
                  justifyContent: "center",
                  margin: "10px",
                }}
              >
                <p>Free 30-day trial.</p>
              </div>
              <div
                className={css.li}
                style={{
                  padding: "0px",
                  display: "flex",
                  justifyContent: "center",
                  margin: "10px",
                }}
              >
                <p>No credit card required.</p>
              </div>
            </div>
            <div>
              <button className={css.buttons}>See Pricing</button>
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

      <div
        className={css.parentFlex}
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        <div style={{ width: "auto" }}>
          <span style={{ color: " #fa6652" }}>70,000+</span> companies track
          time with Harvest
        </div>
        <div style={{ width: "70%" }}>
          {" "}
          <hr />
        </div>
      </div>

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
      <hr />
    </>
  );
};

export default Dashboard;
