import * as React from "react";
import "./styles/index.css";
import Navbar from "./components/Navbar";
import Main from "./components/layouts/MainLayout";
import Footer from "./components/Footer";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <StaticImage
          className="svgimage"
          src="../images/chiara.png"
          alt="Chiara DC"
          width="300"
          height="300"
        />
        <div className="title">
          <h1 className="name">Chiara DC</h1>
          <h2 className="">Scientist, developer, and photographer</h2>
        </div>
      </div>
      <div className="text">
        <h1 id="about">About Me</h1>
        <p>
          Hi! I'm a scientist, developer, and photographer, currently studying
          Physics at Cambridge.
        </p>
        <p>
          I have been an enthusiastic photographer for many years, with
          experience photographing cityscapes, landscapes, wildlife, and macro
          photography, as well as headshots and event photography (under a
          variety of conditions). I currently use a Canon EOS 5D camera
          (previously a Sony DSLR camera).
        </p>
        <p>
          I'm a photographer for Varsity, the independent Cambridge student
          newspaper, and also happy to do events, street photography, or pretty
          much anything!
        </p>
        <p>
          I also have experience photographing May Balls and society events,
          including{" "}
          <a className="email" href="/events/robinsonmayball">
            Robinson May Ball
          </a>{" "}
          and{" "}
          <a className="email" href="/events/ngp2024">
            Newnham Garden Party
          </a>
          . See more examples of my work
          <a className="email" href="/events/">
            {" "}
            here!
          </a>
        </p>
        <p>
          Email me at{" "}
          <a className="email" href="mailto: hello@chiaradc.com">
            hello@chiaradc.com
          </a>{" "}
          to negotiate rates or request more information! Alternatively, DM me
          on Instagram at{" "}
          <a
            className="email"
            href="https://www.instagram.com/chiaradc.photos/"
          >
            @chiaradc.photos
          </a>
        </p>
      </div>
      <div className="text">
        <h1 id="photography">Photography</h1>
        {/* <p>
          A PDF version of my portfolio (for reference) can be found{" "}
          <a
            href="https://www.dropbox.com/scl/fi/ll6ibc08q4pp1s6y5u0ij/Portfolio-ChiaraDC.pdf?rlkey=djtoigwwc4cl6hoyzkc5pyblx&dl=0"
            className="link"
          >
            here: [PDF version].
          </a>
        </p> */}
        <p>My portfolio can be found below:</p>
      </div>
      <div className="portfolio">
        <Main />
      </div>

      <div className="text">
        <h1 id="contact">Contact</h1>
        <p>
          Email me at{" "}
          <a className="email" href="mailto: hello@chiaradc.com">
            hello@chiaradc.com
          </a>{" "}
          to negotiate rates or request more information! Alternatively, DM me
          on Instagram at{" "}
          <a
            className="email"
            href="https://www.instagram.com/chiaradc.photos/"
          >
            @chiaradc.photos
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Chiara DC</title>;
