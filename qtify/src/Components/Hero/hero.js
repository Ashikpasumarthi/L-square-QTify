import React from "react";
import styles from "./Hero.module.css";
import HeroHeadphones from "../../assets/headphones.png";

function Hero() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "black" }}>
      <div className={`container py-5 ${styles.hero}`}>
        <div className="row align-items-center justify-content-between">

          {/* LEFT TEXT COLUMN */}
          <div className={`col-lg-8 col-md-6 text-white text-md-end ${styles.plLgCustom}`}>
            <h1 className="text-center">100 Thousand Songs, ad-free</h1>
            <h1 className="text-center">Over thousands podcast episodes</h1>
          </div>

          {/* RIGHT IMAGE COLUMN */}
          <div className={`col-lg-4 col-md-6 ${styles.peLgExtra}`}>
            <img
              src={HeroHeadphones}
              alt="headphones"
              style={{ width: "12rem", maxWidth: "100%" }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;
