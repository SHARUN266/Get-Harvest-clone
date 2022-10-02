import React from "react";
import css from "./Customer.module.css";
import { Image } from "@chakra-ui/react";
import pic from "../Pictures/1.png";
import { Link } from "react-router-dom";

const Customer = () => {
  return (
    <div className={css.main}>
      {/*  */}
      <div className={css.pFlex}>
        {/* <div style={{ width: "70%" }}>
          <Image
            style={{ height: "100%", margin: "auto" }}
            src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illustrations/integrations-home.svg"
          />
        </div> */}
        {/*  */}
        <div style={{ width: "100%" }}>
          <p className={css.one}>CUSTOMER STORIES</p>
          <p className={css.two}>Helping teams thrive since 2006 </p>
          <p className={css.three}>
            Teams of all sizes, types, and industries trust Harvest to track
            their time.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              alt=""
              style={{ width: "100%", margin: "auto", margin: "auto" }}
              src="http://localhost:3000/1.png"
            />
          </div>
          <Link to="/customers">
            <div
              className={css.parentFlex}
              style={{
                justifyContent: "flex-start",
                marginTop: "30px",
                marginBottom: "50px",
              }}
            >
              {" "}
              <button className={css.buttons}>Browse integrations</button>
            </div>{" "}
          </Link>
        </div>
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

export default Customer;
