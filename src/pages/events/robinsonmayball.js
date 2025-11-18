import * as React from "react";
import "../styles/index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RobinsonLayout from "../components/layouts/RobinsonLayout";
import { StaticImage } from "gatsby-plugin-image";

const RobinsonMayBall = () => {
  return (
    <>
      <Navbar />
      <div className="text">
        <h1 id="about">Robinson May Ball</h1>
      </div>

      <div className="portfolio">
        <RobinsonLayout />
      </div>
      <div className="portfolio">
        <StaticImage
          src="../../images/events/mayweek/robinson2024/robinson0000.jpg"
          alt="Robinson Survivors' Photo"
        />
      </div>
      <div className="text">
        <h1 id="contact">More Photos</h1>
        <p>
          All 700+ photos can be found on this {""}
          <a
            className="email"
            href="https://drive.google.com/drive/folders/1JN1dJG_a9k23n5dC_Rrh1WYE_d72MU4i?usp=sharing"
          >
            {""} Google Drive folder!
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default RobinsonMayBall;

export const Head = () => <title>Chiara DC - Robinson May Ball</title>;
