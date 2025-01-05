import * as React from "react";
import "./styles/index.css";
import Navbar from "./components/Navbar";
import { StaticImage } from "gatsby-plugin-image";
import Footer from "./components/Footer";

const Events = () => {
  return (
    <>
      <Navbar />
      <div className="text">
        <h1 id="about">Events</h1>
        <p>
          I've photographeds I also have experience photographing May Balls and
          society events, including{" "}
          <a className="email" href="/events/robinsonmayball">
            Robinson May Ball
          </a>{" "}
          and{" "}
          <a className="email" href="/events/newnhamgardenparty">
            Newnham Garden Party
          </a>
        </p>

        <p>
          I have been an enthusiastic photographer for many years, with
          experience photographing cityscapes, landscapes, wildlife, and macro
          photography, as well as headshots and event photography (under a
          variety of conditions). I currently use a Canon EOS 5D DSLR camera
          (previously a Sony DSLR camera).
        </p>
        <p>
          I currently use a Canon EOS 5D DSLR camera (previously a Sony DSLR
          camera).
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
        <h1 id="photography">May Balls and Garden Parties</h1>
      </div>

      <div className="portfolio">
        <a href="/events/robinsonmayball" class="button">
          <div className="buttontext">Robinson May Ball 2024</div>
          <StaticImage
            src="../images/tags/canoneos5d/mayweek/robinson/robinson0000 copy.jpg"
            alt="Robinson May Ball"
          />
        </a>
        <a href="/events/newnhamgardenparty" class="button">
          <div className="buttontext">Newnham Garden Party 2024</div>
          <StaticImage
            src="../images/tags/canoneos5d/mayweek/newnham/newnham0921.jpg"
            alt="Newnham Garden Party"
          />
        </a>
      </div>

      <div className="text">
        <h1 id="photography">Society Events</h1>
        <p>My portfolio can be found below:</p>
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

export default Events;

export const Head = () => <title>Chiara DC</title>;
