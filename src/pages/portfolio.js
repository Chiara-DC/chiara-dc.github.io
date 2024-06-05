import * as React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/index.css";

import People from "./components/layouts/People";

const CambridgeHalfMarathon = () => {
  return (
    <>
      <Navbar />
      <div className="text">
        <h1 id="about">Photos of Humans</h1>
      </div>
      <div className="home">
        <People />
      </div>
      <Footer />
    </>
  );
};

export default CambridgeHalfMarathon;

export const Head = () => (
  <title>Chiara DC - Projects - Cambridge Half Marathon</title>
);
