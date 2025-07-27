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
          General Downing May Ball photos can be found{" "}
          <a classname="email" href="/events/dmb2025">
            here
          </a>{" "}
          or in this
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

export default DowningVIP;

export const Head = () => (
  <title>Chiara DC - Downing May Ball VIP Reception</title>
);
