import React from "react";
import css from "./TimeTracking.module.css";
import { Link } from "react-router-dom";
const TimeTracking = () => {
  return (
    <>
      <div
        className={css.parentFlex}
        style={{
          marginTop: "60px",
        }}
      >
        <div
          className={css.childFlex}
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <img
            style={{ width: "80%", margin: "auto" }}
            alt=""
            src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-keep.svg"
          />
          <div
            style={{
              textAlign: "center",
              padding: "5px 40px",
              color: "#787672",
              fontSize: "22px",
            }}
          >
            <div>
              "We needed something super simple because we don’t want to have to
              teach people how to use it as part of onboarding."
            </div>
            <div>Nick Frandsen, Dovetail</div>
          </div>
        </div>

        <div className={css.childFlex}>
          {/* <p
          style={{
            color: "#fa6652",
            fontWeight: "bold",
            margin: "20px 20px 20px 0px",
          }}
        >
          SEE WHY 70,000+ COMPANIES TRACK TIME WITH HARVEST
        </p> */}
          <h1 className={css.big}>
            Time tracking that works the way your team works{" "}
          </h1>
          <p className={css.three}>
            Time tracking software is only useful if it’s actually used. That’s
            why we designed Harvest to be easy to adopt, integrated with your
            favorite apps, and flexible enough for all types of teams.{" "}
          </p>
          <ul className={css.ul}>
            <li className={css.li}>
              <p>
                <span className={css.span}></span>
                Integrated with the tools your team already knows and loves
              </p>
            </li>

            <li className={css.li}>
              <p>
                <span className={css.span}> </span>
                Track time wherever you work - desktop, browser, and mobile
              </p>
            </li>
            <li className={css.li}>
              <p>
                <span className={css.span}> </span>
                Intuitive and easy to learn
              </p>
            </li>
          </ul>
          <div className={css.buttonsFlex}>
            {/* <div>
            <Link to="/signUp">
              <button
                className={css.buttons}
                style={{
                  backgroundColor: "#fa5d00",
                }}
              >
                Try Harvest free
              </button>
            </Link>
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
          </div> */}
            <Link to="/feature">
              <div>
                <button className={css.buttons}>Browse features</button>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* <div
      className={css.parentFlex}
      style={{
        marginTop: "30px",
        marginBottom: "30px",
        justifyContent: "flex-start",
      }}
    >
      <div style={{ width: "auto" }}>
        <span style={{ color: " #fa6652" }}>70,000+</span> companies track
        time with Harvest
      </div>
      <div style={{ flex: "2" }}>
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
    </div> */}

      <hr
        style={{
          marginTop: "60px",
        }}
      />
    </>
  );
};

export default TimeTracking;
