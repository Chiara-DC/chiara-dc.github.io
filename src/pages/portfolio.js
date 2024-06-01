import * as React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/index.css";

import NewPhotoLayout from "./components/NewPhotoLayout";

const CambridgeHalfMarathon = () => {
  return (
    <>
      <Navbar />
      <div className="text">
        <h1 id="about">Photos of Humans</h1>
      </div>
      <div className="home">
        <NewPhotoLayout />
      </div>
      <Footer />
    </>
  );
};

export default CambridgeHalfMarathon;

export const Head = () => (
  <title>Chiara DC - Projects - Cambridge Half Marathon</title>
);
