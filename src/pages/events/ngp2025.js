import * as React from "react";
import "../styles/index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newnham25Layout from "../components/layouts/Newnham25Layout";

const NewnhamGardenParty2025 = () => {
  return (
    <>
      <Navbar />
      <div className="text">
        <h1 id="about">Newnham Garden Party 2025</h1>
      </div>

      <div className="portfolio">
        <Newnham25Layout />
      </div>

      <div className="text">
        <h1 id="contact">More Photos</h1>
        <p>
          All 700+ photos can be found on this {""}
          <a
            className="email"
            href="https://drive.google.com/drive/folders/1hdV1Pi7YRH-n3bPbplhUdf5CpS8jRPwu?usp=drive_link"
          >
            {""} Google Drive folder!
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default NewnhamGardenParty2025;

export const Head = () => <title>Chiara DC</title>;
