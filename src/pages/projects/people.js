import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/index.css";
import PeopleLayout from "../components/layouts/PeopleLayout";

const PeoplePhotos = () => {
  return (
    <>
      <Navbar />
      <div className="text">
        <h1 id="about">Photos of Humans</h1>
      </div>
      <div className="home">
        <PeopleLayout />
      </div>
      <Footer />
    </>
  );
};

export default PeoplePhotos;

export const Head = () => (
  <title>Chiara DC - Projects - Cambridge Half Marathon</title>
);
