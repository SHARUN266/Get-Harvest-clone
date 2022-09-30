import React from "react";
import css from "./Featurs.module.css";
import { Image } from "@chakra-ui/react";

const Featurs = () => {
  return (
    <div className={css.main}>
      <p
        style={{
          color: "#fa6652",
          fontWeight: "bold",
          fontSize: "25px",
          margin: "20px 20px 20px 0px",
        }}
      >
        FEATURES
      </p>
      <p
        style={{
          fontSize: "45px",
          fontWeight: "350",
          margin: "20px 20px 20px 0px",
        }}
      >
        Everything you need to keep your team ticking
      </p>
      <p
        style={{
          fontSize: "25px",
          margin: "20px 20px 20px 0px",
        }}
      >
        Time tracking software that helps you keep time and get insights.
      </p>
      {/*  */}

      <div className={css.pFlex}>
        <div
          className={css.pFlex}
          style={{
            flexDirection: "column",
            width: "40%",

            justifyContent: "space-between",
          }}
        >
          <div className={(css.pFlex, css.lcard)}>
            <div style={{ width: "30%" }}>
              <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-time.svg" />
            </div>
            <div style={{ width: "60%" }}>
              <div>Time tracking</div>
              <div>Simple and intuitive time tracking your team will love.</div>
            </div>
          </div>
          {/*  */}
          <div className={(css.pFlex, css.lcard)}>
            <div className={css.pFlex}>
              <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-reporting.svg" />
            </div>
            <div>
              <div>Reports & analysis</div>
              <div>Unlock the insights that help your business thrive.</div>
            </div>
          </div>
          {/*  */}
          <div className={(css.pFlex, css.lcard)}>
            <div>
              <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-invoicing.svg" />
            </div>
            <div>
              <div>Invoicing & payments</div>
              <div>Seamless invoicing and fast online payments.</div>
            </div>
          </div>
        </div>
        <div>
          <Image src="https://www.getharvest.com/hs-fs/hubfs/screenshot-home-timesheets.png?width=1700&name=screenshot-home-timesheets.png"></Image>
        </div>
      </div>

      <div
        className={css.parentFlex}
        style={{
          justifyContent: "flex-start",
          marginTop: "30px",
          marginBottom: "50px",
        }}
      >
        {" "}
        <button className={css.buttons}>Discover all features</button>
      </div>
      <hr
        style={{
          marginTop: "30px",
          marginBottom: "30px",
        }}
      ></hr>
    </div>
  );
};

export default Featurs;
