import * as React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/index.css";
import Original from "./components/layouts/original";

const Test = () => {
  return (
    <>
      <Navbar />
      <div className="text">
        <h1 id="about">test</h1>
      </div>
      <div className="home">
        <Original />
      </div>
      <Footer />
    </>
  );
};

export default Test;

export const Head = () => <title>Chiara DC - Projects - Cambridge Walks</title>;
