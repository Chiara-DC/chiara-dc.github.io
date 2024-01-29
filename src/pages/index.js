import * as React from "react";
import "./styles/index.css";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        {/* <img
          src="https://www.dropbox.com/scl/fi/i7s3jzdhov0fnqjc9p3hd/chiara.svg?rlkey=8lv4opvcrvl7t140fk9ahan1y&raw=1"
          width="400"
          height="400"
          alt="Chiara DC"
          className="svgimage"
        /> */}
        <img
          src="https://www.dropbox.com/scl/fi/lwvyh72u8hd2t9b40wmq8/chiara.png?rlkey=fmf1rrvaj3wwepypxv9ikzcj5&raw=1"
          width="300"
          height="300"
          alt="Chiara DC"
          className="svgimage"
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
          much anything!{" "}
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
        <p>
          A PDF version of my portfolio (for reference) can be found{" "}
          <a
            href="https://www.dropbox.com/scl/fi/ll6ibc08q4pp1s6y5u0ij/Portfolio-ChiaraDC.pdf?rlkey=djtoigwwc4cl6hoyzkc5pyblx&dl=0"
            className="link"
          >
            here: [PDF version].
          </a>
        </p>
        <p>A gallery can also be found below! </p>
      </div>
      <div className="portfolio">
        <Portfolio />
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
