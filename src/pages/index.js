import * as React from "react";
import "./styles/index.css";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <svg
          className="svgimage"
          width="304"
          height="304"
          viewBox="0 0 304 304"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="152" cy="152" r="152" fill="#0C265A" />
        </svg>
        {/* <img
          src="https://www.dropbox.com/scl/fi/i7s3jzdhov0fnqjc9p3hd/chiara.svg?rlkey=8lv4opvcrvl7t140fk9ahan1y&raw=1"
          width="400"
          height="400"
          alt="Photo of Chiara DC"
          className="svgimage"
        /> */}
        <div className="title">
          <h1 className="name">Chiara DC</h1>
          <h2 className="">Scientist, developer, and amateur photographer</h2>
        </div>
      </div>
      <div className="text">
        <h1 id="about">About Me</h1>
        <p>
          Hi! I'm a scientist, developer, and photographer, currently studying
          Physics at Cambridge.
        </p>
        {/* <p>
          Scientist, developer, and amateur photographer. Scientist, developer,
          and amateur photographer. Scientist, developer, and amateur
          photographer. Scientist, developer, and amateur photographer.
          Scientist, developer, and amateur photographer.
        </p> */}
      </div>
      <div className="text">
        <h1 id="photography">Photography</h1>
        <p>
          I have been an enthusiastic photographer for many years, with
          experience photographing cityscapes, landscapes, wildlife, and macro
          photography (as well as occasional portrait photos for friends and
          family members), and some event photography (under a variety of
          conditions). I currently use a Sony DLSR camera.
        </p>
        <p>
          A PDF version of my portfolio (for reference) can be found{" "}
          <a
            href="https://www.dropbox.com/scl/fi/ll6ibc08q4pp1s6y5u0ij/Portfolio-ChiaraDC.pdf?rlkey=djtoigwwc4cl6hoyzkc5pyblx&dl=0"
            className="link"
          >
            here: [PDF version].
          </a>
        </p>
        <p>A gallery can also be found below!</p>
        <Portfolio />
      </div>
      <div className="text">
        <h1 id="contact">Contact</h1>
        <p>
          Email me at{" "}
          <a className="email" href="mailto: hello@chiaradc.com">
            hello@chiaradc.com
          </a>{" "}
          to negotiate rates or request more information!
        </p>
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Chiara DC</title>;
