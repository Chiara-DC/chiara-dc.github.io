import "../Portfolio.css";
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function RobinsonLayout() {
  return (
    <>
      <div className="row">
        <StaticImage
          className="staticimage"
          src="../../../images/tags/canoneos5d/mayweek/robinson/robinson0000.jpg"
          alt="Robinson 0000"
        />
        <div className="column">
          <StaticImage
            className="staticimage"
            src="../../../images/tags/canoneos5d/mayweek/robinson/robinson8184.jpg"
            alt="Robinson 8184"
          />
        </div>

        <div className="column">
          <StaticImage
            className="staticimage"
            src="../../../images/tags/canoneos5d/mayweek/robinson/robinson8144.jpg"
            alt="Robinson 8144"
          />
        </div>

        <div className="column">
          <StaticImage
            className="staticimage"
            src="../../../images/tags/canoneos5d/mayweek/robinson/robinson8729.jpg"
            alt="Robinson 8729"
          />
        </div>
      </div>
    </>
  );
}
