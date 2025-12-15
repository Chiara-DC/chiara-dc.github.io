import * as React from "react";
import "../styles/index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Selwyn25Layout from "../components/layouts/Selwyn25Layout";

const SelwynSnowBall = () => {
  return (
    <>
      <Navbar />
      <div className="text">
        <h1 id="about">Selwyn Snow Ball 2025</h1>
      </div>

      <div className="portfolio">
        <Selwyn25Layout />
      </div>

      <div className="text">
        <h1 id="contact">More Photos</h1>
        <p>
          All 1200+ photos can be found on this {""}
          <a
            className="email"
            href="https://drive.google.com/drive/folders/1tV1HRov5WBrQJ3eyk5j57MSUUXM4_i69?usp=drive_link"
          >
            {""} Google Drive folder!
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default SelwynSnowBall;

export const Head = () => <title>Chiara DC</title>;
