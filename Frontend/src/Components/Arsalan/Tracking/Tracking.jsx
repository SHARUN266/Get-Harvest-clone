import React from "react";
import css from "./tracking.module.css";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Tracking = () => {
  return (
    <div style={{ width: "100%", background: "#fff" }}>
      <div className={css.main}>
        {/*  */}
        <div
          className={css.pFlex}
          // style={{ alignItems: "center" }}
        >
          {/*  */}
          <div>
            {/* <p className={css.one}>INTEGRATIONS</p> */}
            <p className={css.two}>Start tracking time today</p>
            <p className={css.three}>
              Join 70,000+ companies spending their time wisely with Harvest.
            </p>
            <div
              className={css.parentFlex}
              style={{
                justifyContent: "flex-start",
                marginTop: "30px",
                marginBottom: "50px",
              }}
            >
              {" "}
              <Link to="/signIn">
                <button
                  className={css.buttons}
                  style={{ backgroundColor: "#fa5d00" }}
                >
                  Try Harvest free
                </button>
              </Link>
              <div
                style={{
                  fontSize: "18px",
                  paddingTop: "15px",
                  paddingLeft: "15px",
                  color: "#787672",
                }}
              >
                {" "}
                Free 30-day trial. No credit card required.
              </div>
            </div>{" "}
          </div>
          {/*  */}
          <div
            style={{
              width: "70%",
              padding: "5%",
              display: "flex",
              justifyContent: "flex-start",
              gap: "20px",
            }}
          >
            <Image
              style={{ height: "100%", margin: "auto" }}
              src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg"
            />
          </div>
        </div>

        {/* <hr
        style={{
          marginTop: "30px",
          marginBottom: "30px",
        }}
      ></hr> */}
      </div>
    </div>
  );
};

export default Tracking;
