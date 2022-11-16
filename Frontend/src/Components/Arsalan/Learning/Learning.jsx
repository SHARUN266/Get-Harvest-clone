import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import css from "./Learning.module.css";
import { Image } from "@chakra-ui/react";
const Learning = () => {
  return (
    <div className={css.main}>
      {/*  */}
      <div className={css.pFlex}>
        {/*  */}
        <div style={{ width: "70%" }}>
          <p className={css.one}>LEARNING RESOURCES</p>
          <p className={css.two}>Supporting your team along the way</p>
          {/* <div
            className={css.parentFlex}
            style={{
              justifyContent: "flex-start",
              marginTop: "30px",
              marginBottom: "50px",
            }}
          >
            {" "}
            <button className={css.buttons}>Browse integrations</button>
          </div>{" "} */}
        </div>
        {/*  */}
        <div style={{ width: "100%" }}>
          {/* ........ */}
          <div
            className={css.pFlex}
            style={{
              flexDirection: "column",
              width: "70%",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <div
              className={`${css.pFlex} ${css.left}`}
              style={{
                borderTop: "1px solid #fa6652",
                padding: "20px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "30%",
                }}
              >
                <Image
                  style={{
                    width: "80%",
                  }}
                  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-folder.svg"
                />
              </div>
              <div>
                <div style={{ fontSize: "25px" }}>Guides and templates</div>
                <div style={{ fontSize: "18px" }}>
                  Learn how to introduce your team to time tracking and make the
                  most of Harvest.
                </div>
              </div>
              <div>
                <AiOutlineArrowRight
                  style={{ color: "#fa6652", fontSize: "30px" }}
                />
              </div>
            </div>
            {/*  */}
            <div
              className={`${css.pFlex} ${css.left}`}
              style={{
                borderTop: "1px solid #fa6652",
                padding: "20px",
                alignItems: "center",
              }}
            >
              {" "}
              <div
                className={css.pFlex}
                style={{
                  width: "30%",
                }}
              >
                <Image
                  style={{
                    width: "80%",
                  }}
                  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-laptop.svg"
                />
              </div>
              <div>
                <div style={{ fontSize: "25px" }}>Webinars</div>
                <div style={{ fontSize: "18px" }}>
                  Watch a quick intro to Harvest or sign up for a live session
                  with one of our Experts.
                </div>
              </div>
              <div>
                <AiOutlineArrowRight
                  style={{ color: "#fa6652", fontSize: "30px" }}
                />
              </div>
            </div>
            {/*  */}
            <div
              className={`${css.pFlex} ${css.left}`}
              style={{
                borderBottom: "1px solid #fa6652",
                padding: "20px",
                alignItems: "center",
                borderTop: "1px solid #fa6652",
              }}
            >
              <div
                style={{
                  width: "30%",
                }}
              >
                <Image
                  style={{
                    width: "70%",
                  }}
                  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-help.svg"
                />
              </div>
              <div>
                <div style={{ fontSize: "25px" }}>Help Center</div>
                <div style={{ fontSize: "18px" }}>
                  Find the answers to all your questions or get in touch with
                  one of our friendly Experts.
                </div>
              </div>
              <div>
                <AiOutlineArrowRight
                  style={{ color: "#fa6652", fontSize: "30px" }}
                />
              </div>
            </div>
          </div>
          {/* ........ */}
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

export default Learning;
