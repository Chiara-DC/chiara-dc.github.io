import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/index.css";
import Layout from "../components/layouts/cambridge";

const CambridgeWalks = () => {
  return (
    <>
      <Navbar />
      <div className="text">
        <h1 id="about">Walks around Cambridge</h1>
      </div>
      <div className="home">
        <Layout />
      </div>
      <Footer />
    </>
  );
};

export default CambridgeWalks;

export const Head = () => <title>Chiara DC - Projects - Cambridge Walks</title>;
