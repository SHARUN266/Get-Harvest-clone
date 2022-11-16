import React from "react";
import css from "./ProjectsTrack.module.css";
import { Link } from "react-router-dom";
const ProjectsTrack = () => {
  return (
    <>
      <div
        className={css.parentFlex}
        style={{
          marginTop: "60px",
        }}
      >
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
          <h1 className={css.big}>Keep your projects on track </h1>
          <p className={css.three}>
            Harvest provides visibility into the key aspects of your
            projects—budget, team capacity, and costs—enabling you to keep
            everything on time and on budget.
          </p>
          <ul className={css.ul}>
            <li className={css.li}>
              <p>
                <span className={css.span}></span>
                Clear visual reports allow you to compare actual time vs. budget
              </p>
            </li>

            <li className={css.li}>
              <p>
                <span className={css.span}> </span>
                Get more accurate timesheet and cost data
              </p>
            </li>
            <li className={css.li}>
              <p>
                <span className={css.span}> </span>
                Pinpoint which tasks are impacting costs
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
            src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-track.svg"
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
              "We can see if a project is in danger of going off track and
              course-correct way before it actually becomes a problem."
            </div>
            <div>Michael Kucera, Zehner</div>
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

export default ProjectsTrack;
