import "./Portfolio.css";
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function NewPhotoLayout({
  column1,
  column2,
  column3,
  twocol1,
  twocol2,
}) {
  return (
    <>
      <div className="row">
        <div className="column">
          <StaticImage
            src="../../images/portfolio/varsity1.jpg"
            alt="Varsity 1"
          />
          <StaticImage
            src="../../images/portfolio/varsity4.jpg"
            alt="Varsity 4"
          />
          <StaticImage
            src="../../images/portfolio/varsity7.jpg"
            alt="Varsity 7"
          />
          <StaticImage
            src="../../images/portfolio/headshot1.jpg"
            alt="Headshot 1"
          />
          <StaticImage
            src="../../images/portfolio/varsity10.jpg"
            alt="Varsity 10"
          />
          <StaticImage
            src="../../images/portfolio/varsity11.jpg"
            alt="Varsity 11"
          />
          <StaticImage src="../../images/portfolio/union2.jpg" alt="Union 2" />
          <StaticImage
            src="../../images/portfolio/halfwayhall1.jpg"
            alt="Halfway Hall 1"
          />
        </div>

        <div className="column">
          <StaticImage
            src="../../images/portfolio/varsity2.jpg"
            alt="Varsity 2"
          />
          <StaticImage
            src="../../images/portfolio/varsity5.jpg"
            alt="Varsity 5"
          />
          <StaticImage
            src="../../images/portfolio/headshot2.jpg"
            alt="Headshot2"
          />

          <StaticImage
            src="../../images/portfolio/varsity8.jpg"
            alt="Varsity 8"
          />
          <StaticImage
            src="../../images/portfolio/varsity12.jpg"
            alt="Varsity 12"
          />
          <StaticImage src="../../images/portfolio/union3.jpg" alt="Union 3" />
          <StaticImage
            src="../../images/portfolio/halfwayhall2.jpg"
            alt="Halfway Hall 2"
          />
        </div>

        <div className="column">
          <StaticImage
            src="../../images/portfolio/varsity3.jpg"
            alt="Varsity 3"
          />

          <StaticImage
            src="../../images/portfolio/varsity6.jpg"
            alt="Varsity 6"
          />
          <StaticImage
            src="../../images/portfolio/headshot3.jpg"
            alt="Headshot 3"
          />
          <StaticImage
            src="../../images/portfolio/varsity9.jpg"
            alt="Varsity 9"
          />
          <StaticImage
            src="../../images/portfolio/varsity13.jpg"
            alt="Varsity 13"
          />
          <StaticImage src="../../images/portfolio/union1.jpg" alt="Union 1" />
          <StaticImage
            src="../../images/portfolio/halfwayhall3.jpg"
            alt="Halfway Hall 3"
          />
        </div>
      </div>
      <div className="twocolrow">
        <div className="twocolcolumn">
          <StaticImage
            src="../../images/portfolio/varsity1.jpg"
            alt="Varsity 1"
          />
          <StaticImage
            src="../../images/portfolio/varsity4.jpg"
            alt="Varsity 4"
          />
          <StaticImage
            src="../../images/portfolio/varsity7.jpg"
            alt="Varsity 7"
          />
          <StaticImage
            src="../../images/portfolio/headshot1.jpg"
            alt="Headshot 1"
          />
          <StaticImage
            src="../../images/portfolio/varsity6.jpg"
            alt="Varsity 6"
          />
          <StaticImage
            src="../../images/portfolio/varsity10.jpg"
            alt="Varsity 10"
          />
          <StaticImage
            src="../../images/portfolio/varsity11.jpg"
            alt="Varsity 11"
          />
          <StaticImage src="../../images/portfolio/union2.jpg" alt="Union 2" />
          <StaticImage
            src="../../images/portfolio/halfwayhall1.jpg"
            alt="Halfway Hall 1"
          />
          <StaticImage
            src="../../images/portfolio/varsity8.jpg"
            alt="Varsity 8"
          />
          <StaticImage
            src="../../images/portfolio/varsity12.jpg"
            alt="Varsity 12"
          />
        </div>

        <div className="twocolcolumn">
          <StaticImage
            src="../../images/portfolio/varsity2.jpg"
            alt="Varsity 2"
          />
          <StaticImage
            src="../../images/portfolio/varsity5.jpg"
            alt="Varsity 5"
          />
          <StaticImage
            src="../../images/portfolio/headshot2.jpg"
            alt="Headshot2"
          />
          <StaticImage
            src="../../images/portfolio/varsity3.jpg"
            alt="Varsity 3"
          />
          <StaticImage
            src="../../images/portfolio/headshot3.jpg"
            alt="Headshot 3"
          />
          <StaticImage
            src="../../images/portfolio/varsity9.jpg"
            alt="Varsity 9"
          />
          <StaticImage
            src="../../images/portfolio/varsity13.jpg"
            alt="Varsity 13"
          />
          <StaticImage src="../../images/portfolio/union1.jpg" alt="Union 1" />
          <StaticImage
            src="../../images/portfolio/halfwayhall3.jpg"
            alt="Halfway Hall 3"
          />
          <StaticImage src="../../images/portfolio/union3.jpg" alt="Union 3" />
          <StaticImage
            src="../../images/portfolio/halfwayhall2.jpg"
            alt="Halfway Hall 2"
          />
        </div>
      </div>
    </>
  );
}