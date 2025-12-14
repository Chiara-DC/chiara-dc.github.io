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
          I've photographed May Week events, including{" "}
          <a className="email" href="/events/robinsonmayball">
            Robinson May Ball
          </a>{" "}
          and{" "}
          <a className="email" href="/events/ngp2024">
            Newnham Garden Party
          </a>
          , as well as society and college events. Having been an enthusiastic
          amateur photographer for most of my life, I also have experience with
          cityscapes, landscapes, wildlife, and macro photography, as well as
          headshots. More of my (non-event-specific) photos can be found{" "}
          <a className="email" href="/">
            here
          </a>
          .
        </p>

        <p>
          I currently use a Canon EOS 5D DSLR camera, with equipment to
          accommodate any weather and lighting conditions.
        </p>
      </div>
      <div className="text">
        <h1 id="photography">May Balls and Garden Parties</h1>
      </div>

      <div className="portfolio">
        <a href="/events/dmb2025" class="button">
          <div className="buttontext">Downing May Ball 2025</div>
          <StaticImage
            src="../images/events/mayweek/downing2025/downing4338.jpg"
            alt="Downing May Ball"
          />
        </a>{" "}
        <a href="/events/ngp2025" class="button">
          <div className="buttontext">Newnham Garden Party 2025</div>
          <StaticImage
            src="../images/events/mayweek/newnham2025/newnham2932.jpg"
            alt="Newnham Garden Party"
          />
        </a>
        <a href="/events/downingvip" class="button">
          <div className="buttontext">Downing May Ball VIP Reception</div>
          <StaticImage
            src="../images/events/mayweek/downing2025/downingvip/downingvip3750.jpg"
            alt="Downing May Ball VIP Reception"
          />
        </a>
        <a href="/events/ngp2024" class="button">
          <div className="buttontext">Newnham Garden Party 2024</div>
          <StaticImage
            src="../images/events/mayweek/newnham2024/newnham0921.jpg"
            alt="Newnham Garden Party"
          />
        </a>
        <a href="/events/robinsonmayball" class="button">
          <div className="buttontext">Robinson May Ball 2024</div>
          <StaticImage
            src="../images/events/mayweek/robinson2024/robinson0000 copy.jpg"
            alt="Robinson May Ball"
          />
        </a>
      </div>

      <div className="text">
        <h1 id="photography">Society Events</h1>
        <a href="/events/caiuslawyers" class="button">
          <div className="buttontext">Caius Lawyers and Alumni</div>
          <StaticImage
            src="../images/events/misc/caiuslaw2024/caiuslaw7510.jpg"
            alt="Caius Lawyers and Alumni"
          />
        </a>
        <a href="/events/christshalfwayhall" class="button">
          <div className="buttontext">Christ's Halfway Hall</div>
          <StaticImage
            src="../images/events/misc/halfwayhall2024/IMG_HalfWayHall-123.jpg"
            alt="Christ's Halfway Hall"
          />
        </a>
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

export const Head = () => <title>Chiara DC - Events</title>;
