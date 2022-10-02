import React from "react";
import css from "./Featurs.module.css";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Featurs = () => {
  return (
    <div style={{ width: "100%", background: "#fff8f1" }}>
      <div className={css.main}>
        <p className={css.one}>FEATURES</p>
        <p className={css.two}>Everything you need to keep your team ticking</p>
        <p className={css.three}>
          Time tracking software that helps you keep time and get insights.
        </p>
        {/*  */}

        <div className={css.pFlexM}>
          <div
            className={`${css.pFlex} ${css.width}`}
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Link to="/feature">
              <div
                className={`${css.pFlex} ${css.left}`}
                style={{
                  border: "1px solid #fa6652",
                  padding: "20px",
                  borderRadius: "20px",
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
                    src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-time.svg"
                  />
                </div>
                <div>
                  <div style={{ fontSize: "25px" }}>Time tracking</div>
                  <div style={{ fontSize: "18px" }}>
                    Simple and intuitive time tracking your team will love.
                  </div>
                </div>
              </div>
            </Link>
            {/*  */}
            <Link to="/feature">
              <div
                className={`${css.pFlex} ${css.left}`}
                style={{
                  border: "1px solid #fa6652",
                  padding: "20px",
                  borderRadius: "20px",
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
                    src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-reporting.svg"
                  />
                </div>
                <div>
                  <div style={{ fontSize: "25px" }}>Reports & analysis</div>
                  <div style={{ fontSize: "18px" }}>
                    Unlock the insights that help your business thrive.
                  </div>
                </div>
              </div>
            </Link>

            {/*  */}
            <Link to="/feature">
              {" "}
              <div
                className={`${css.pFlex} ${css.left}`}
                style={{
                  border: "1px solid #fa6652",
                  padding: "20px",
                  borderRadius: "20px",
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
                      width: "70%",
                    }}
                    src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-invoicing.svg"
                  />
                </div>
                <div>
                  <div style={{ fontSize: "25px" }}>Invoicing & payments</div>
                  <div style={{ fontSize: "18px" }}>
                    Seamless invoicing and fast online payments.
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Image src="https://www.getharvest.com/hs-fs/hubfs/screenshot-home-timesheets.png?width=1700&name=screenshot-home-timesheets.png"></Image>
          </div>
        </div>
        <Link to="/feature">
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
        </Link>
        <hr
          style={{
            marginTop: "30px",
            marginBottom: "30px",
          }}
        ></hr>
      </div>
    </div>
  );
};

export default Featurs;
