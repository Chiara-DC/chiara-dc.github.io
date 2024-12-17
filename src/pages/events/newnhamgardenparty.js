import * as React from "react";
import "../styles/index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewnhamLayout from "../components/layouts/NewnhamLayout";

const NewnhamGardenParty = () => {
  return (
    <>
      <Navbar />
      <div className="text">
        <h1 id="about">Newnham Garden Party</h1>
      </div>

      <div className="portfolio">
        <NewnhamLayout />
      </div>

      <div className="text">
        <h1 id="contact">More Photos</h1>
        <p>
          All 400+ photos can be found on this {""}
          <a
            className="email"
            href=" https://drive.google.com/drive/folders/1F8x52wwSOJG-8xH9wBboHueKSlOe_JUE?usp=sharing"
          >
            {""} Google Drive folder!
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default NewnhamGardenParty;

export const Head = () => <title>Chiara DC</title>;
