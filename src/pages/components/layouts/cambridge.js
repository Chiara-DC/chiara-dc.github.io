import "../Portfolio.css";
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Cambridge() {
  return (
    <>
      <div className="row">
        <div className="column">
          <StaticImage
            className="staticimage"
            src="../../../images/tags/canoneos5d/cambridge/bikes.jpg"
            alt="Bikes"
          />
          <StaticImage
            className="staticimage"
            src="../../../images/tags/canoneos5d/cambridge/ducks.jpg"
            alt="Ducks"
          />
          <StaticImage
            className="staticimage"
            src="../../../images/tags/canoneos5d/cambridge/punts.jpg"
            alt="Punts"
          />
        </div>

        <div className="column">
          <StaticImage
            className="staticimage"
            src="../../../images/tags/canoneos5d/cambridge/busstop.jpg"
            alt="Bus Stop"
          />
          <StaticImage
            className="staticimage"
            src="../../../images/tags/canoneos5d/cambridge/fallenbarrier.jpg"
            alt="Fallen Barrier"
          />
          <StaticImage
            className="staticimage"
            src="../../../images/tags/canoneos5d/cambridge/bikes.jpg"
            alt="Swans"
          />
        </div>

        <div className="column">
          <StaticImage
            className="staticimage"
            src="../../../images/tags/canoneos5d/cambridge/covidsign.jpg"
            alt="Covid Sign"
          />
          <StaticImage
            className="staticimage"
            src="../../../images/tags/canoneos5d/cambridge/postbox.jpg"
            alt="Postbox"
          />
        </div>
      </div>
      <div className="twocolrow">
        <div className="twocolcolumn">
          <StaticImage
            className="staticimage"
            src="../../../images/tags/canoneos5d/cambridge/bikes.jpg"
            alt="Bikes"
          />
          <StaticImage
            className="staticimage"
            src="../../../images/tags/canoneos5d/cambridge/ducks.jpg"
            alt="Ducks"
          />
          <StaticImage
            className="staticimage"
            src="../../../images/tags/canoneos5d/cambridge/busstop.jpg"
            alt="Bus Stop"
          />
          <StaticImage
            className="staticimage"
            src="../../../images/tags/canoneos5d/cambridge/fallenbarrier.jpg"
            alt="Fallen Barrier"
          />
        </div>

        <div className="twocolcolumn">
          <StaticImage
            className="staticimage"
            src="../../../images/tags/canoneos5d/cambridge/covidsign.jpg"
            alt="Covid Sign"
          />
          <StaticImage
            className="staticimage"
            src="../../../images/tags/canoneos5d/cambridge/postbox.jpg"
            alt="Postbox"
          />
          <StaticImage
            className="staticimage"
            src="../../../images/tags/canoneos5d/cambridge/bikes.jpg"
            alt="Swans"
          />
          <StaticImage
            className="staticimage"
            src="../../../images/tags/canoneos5d/cambridge/punts.jpg"
            alt="Punts"
          />
        </div>
      </div>
    </>
  );
}
