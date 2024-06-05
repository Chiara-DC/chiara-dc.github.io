import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/index.css";
import Cambridge from "../components/layouts/Cambridge";

const CambridgeWalks = () => {
  return (
    <>
      <Navbar />
      <div className="text">
        <h1 id="about">Walks around Cambridge</h1>
      </div>
      <div className="home">
        <Cambridge />
      </div>
      <Footer />
    </>
  );
};

export default CambridgeWalks;

export const Head = () => <title>Chiara DC - Projects - Cambridge Walks</title>;
