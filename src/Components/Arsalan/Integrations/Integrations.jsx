import React from "react";
import css from "./Integrations.module.css";
import { Image } from "@chakra-ui/react";

const Integrations = () => {
  return (
    <div className={css.main}>
      {/*  */}
      <div className={css.pFlex}>
        <div style={{ width: "70%" }}>
          <Image
            style={{ height: "100%", margin: "auto" }}
            src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illustrations/integrations-home.svg"
          />
        </div>
        {/*  */}
        <div>
          <p className={css.one}>INTEGRATIONS</p>
          <p className={css.two}>
            Integrated with the tools your team already knows and loves
          </p>
          <p className={css.three}>
            Your favorite apps work seamlessly with Harvest so you can keep
            projects on track however you work.
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
            <button className={css.buttons}>Browse integrations</button>
          </div>{" "}
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

export default Integrations;
