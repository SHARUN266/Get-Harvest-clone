import React from "react";
import css from "./Help.module.css";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <>
      <div className={css.main}>
        {/*  */}
        <div
          className={css.pFlex}
          // style={{ alignItems: "center" }}
        >
          {/*  */}
          <div>
            {/* <p className={css.one}>INTEGRATIONS</p> */}
            <p className={css.two}>Help your team spend time wisely</p>
            <p className={css.three}>
              Harvest time tracking makes it easy to capture time, gain
            </p>
            <p className={css.three}>
              insights from past projects, and get paid for your work.
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
                  fontSize: "20px",
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
        </div>

        {/* <hr
      style={{
        marginTop: "30px",
        marginBottom: "30px",
      }}
    ></hr> */}
      </div>
      <hr />
    </>
  );
};

export default Help;
