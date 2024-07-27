import * as React from "react";
import "./styles/index.css";
import Navbar from "./components/Navbar";
import VarsityLayout from "./components/layouts/VarsityLayout";
import Footer from "./components/Footer";

const Varsity = () => {
  return (
    <>
      <Navbar />
      <div className="text">
        <h1 id="about">Varsity</h1>
        <p>
          I'm a photographer for Varsity, the independent Cambridge student
          newspaper - articles featuring my photos can be found here!
        </p>
      </div>

      <div className="portfolio">
        <VarsityLayout />
      </div>

      <div className="text">
        <h1 id="contact">List of articles</h1>
        <p>
          Alternatively, here's the list of all the articles!
          <ul>
            <li>
              <a className="email" href="https://www.varsity.co.uk/arts/26034">
                Common threads: embroidery exhibitions at Kettle’s Yard and The
                Fitzwilliam Museum
              </a>{" "}
              (September 2023)
            </li>
            <li>
              <a
                className="email"
                href="https://www.varsity.co.uk/comment/26944"
              >
                Turing and the Typewriter
              </a>{" "}
              (January 2024)
            </li>
            <li>
              <a className="email" href="https://www.varsity.co.uk/sport/27495">
                Emmanuel crowned champions in hotly-contested netball Cuppers
              </a>{" "}
              (April 2024)
            </li>
            <li>
              <a
                className="email"
                href="https://www.varsity.co.uk/lifestyle/27464"
              >
                Notebook: enmeshment, kazoos, and the jigsaws of our lives
              </a>{" "}
              (June 2024)
            </li>
            <li>
              <a
                className="email"
                href="https://www.varsity.co.uk/lifestyle/27487"
              >
                Ask Aunty Maddy: May Week edition
              </a>{" "}
              (June 2024)
            </li>
            <li>
              <a
                className="email"
                href="https://www.varsity.co.uk/fashion/27597"
              >
                Beyond black tie: the students breaking May Ball norms
              </a>{" "}
              (June 2024)
            </li>
            <li>
              <a
                className="email"
                href="https://www.varsity.co.uk/interviews/27803"
              >
                Professor Brendan Burchell on a four-day workweek
              </a>{" "}
              (June 2024)
            </li>
            <li>
              <a
                className="email"
                href="https://www.varsity.co.uk/features/27944"
              >
                Behind the scenes of a Cambridge summer placement
              </a>{" "}
              (July 2024)
            </li>
          </ul>
        </p>
        <p>
          More of my photos can be found in the{" "}
          <a className="email" href="https://issuu.com/varsity/docs/issue924">
            2024 Varsity Yearbook & Annual Review.
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Varsity;

export const Head = () => <title>Chiara DC</title>;
