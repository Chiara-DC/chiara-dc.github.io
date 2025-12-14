import * as React from "react";
import "../styles/index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Downing25Layout from "../components/layouts/Downing25Layout";

const DowningMayBall = () => {
  return (
    <>
      <Navbar />
      <div className="text">
        <h1 id="about">Downing May Ball 2025</h1>
      </div>

      <div className="portfolio">
        <Downing25Layout />
      </div>

      <div className="text">
        <h1 id="contact">More Photos</h1>
        <p>
          All 900+ photos can be found on this {""}
          <a
            className="email"
            href="https://drive.google.com/drive/folders/1MgAA9dxTalBjeD9wfM3fKKZnZmfHqILg?usp=drive_link"
          >
            {""} Google Drive folder!
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default DowningMayBall;

export const Head = () => <title>Chiara DC - Downing May Ball</title>;
