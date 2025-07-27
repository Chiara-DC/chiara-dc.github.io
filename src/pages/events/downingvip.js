import * as React from "react";
import "../styles/index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DowningVIPLayout from "../components/layouts/DowningVIPLayout";
import { StaticImage } from "gatsby-plugin-image";

const DowningVIP = () => {
  return (
    <>
      <Navbar />
      <div className="text">
        <h1 id="about">Downing May Ball VIP Reception</h1>
      </div>

      <div className="portfolio">
        <DowningVIPLayout />
      </div>
      <div className="text">
        <h1 id="contact">More Photos</h1>
        <p>
          General Downing May Ball photos (all 900+) can be found in this
          <a
            className="email"
            href="https://drive.google.com/drive/folders/1MgAA9dxTalBjeD9wfM3fKKZnZmfHqILg?usp=sharing"
          >
            {""} Google Drive folder!
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default DowningVIP;

export const Head = () => (
  <title>Chiara DC - Downing May Ball VIP Reception</title>
);
