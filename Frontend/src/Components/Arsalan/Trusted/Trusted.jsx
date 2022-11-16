import { Image } from "@chakra-ui/image";
import React from "react";
import css from "./Trusted.module.css";
import { Link } from "react-router-dom";

const Trusted = () => {
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
            src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-invest.svg"
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
              "Harvest gives us feedback on how we’re doing so we can be
              competitive, make a profit, and keep ourselves afloat."
            </div>
            <div>John Wall, Public</div>
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
          <h1 className={css.big}>Trusted by thousands of teams worldwide </h1>
          <p className={css.three}>
            We’ve been serving teams of all sizes, across all types of
            industries for over 15 years. Today, with more than 70,000
            customers, you can be sure that Harvest will work for your team’s
            unique needs.{" "}
          </p>
          <ul className={css.ul}>
            <li className={css.li}>
              <p>
                <span className={css.span}></span>
                Flexible timekeeping and invoicing, whether you bill by time or
                by project
              </p>
            </li>

            <li className={css.li}>
              <p>
                <span className={css.span}> </span>
                Scalable one-product-fits-all approach, that can grow with your
                team
              </p>
            </li>
            <li className={css.li}>
              <p>
                <span className={css.span}> </span>
                Used by companies of all types, from creative agencies to
                management consulting
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

      <div
        className={css.parentFlex}
        style={{
          marginTop: "30px",
          marginBottom: "30px",
          justifyContent: "flex-start",
        }}
      >
        {/* <div style={{ width: "auto" }}>
          <span style={{ color: " #fa6652" }}>70,000+</span> companies track
          time with Harvest
        </div> */}
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
      </div>

      <hr
        style={{
          marginTop: "60px",
        }}
      />
    </>
  );
};

export default Trusted;
