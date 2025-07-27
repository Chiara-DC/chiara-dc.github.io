import * as React from "react";
import "../styles/index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newnham24Layout from "../components/layouts/Newnham24Layout";

const NewnhamGardenParty2024 = () => {
  return (
    <>
      <Navbar />
      <div className="text">
        <h1 id="about">Newnham Garden Party 2024</h1>
      </div>

      <div className="portfolio">
        <Newnham24Layout />
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

export default NewnhamGardenParty2024;

export const Head = () => <title>Chiara DC</title>;
