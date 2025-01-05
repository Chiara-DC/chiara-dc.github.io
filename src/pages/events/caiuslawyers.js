import * as React from "react";
import "../styles/index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewnhamLayout from "../components/layouts/NewnhamLayout";
import CaiusLawLayout from "../components/layouts/CaiusLawLayout";

const CaiusLawyers = () => {
  return (
    <>
      <Navbar />
      <div className="text">
        <h1 id="about">Caius Law Students and Alumni</h1>
      </div>

      <div className="portfolio">
        <CaiusLawLayout />
      </div>

      <div className="text">
        <p>Additional photos available upon request. </p>
      </div>
      <Footer />
    </>
  );
};

export default CaiusLawyers;

export const Head = () => <title>Chiara DC</title>;
