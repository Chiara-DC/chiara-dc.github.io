import "../Portfolio.css";
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Layout() {
  return (
    <>
      <div className="row">
        <div className="column">
          <StaticImage
            src="../../../images/tags/sonya200/city/newyork/skyview.jpeg"
            alt="New York City Skyview"
          />
          <StaticImage
            src="../../../images/tags/sonya200/city/newyork/road.jpeg"
            alt="New York City Road"
          />
          <StaticImage
            src="../../../images/tags/sonya200/Venice sunset.jpeg"
            alt="Venice Sunset"
          />
          <StaticImage
            src="../../../images/tags/sonya200/city/newyork/chinatown.jpeg"
            alt="Chinatown, New York City"
          />
        </div>

        <div className="column">
          <StaticImage
            src="../../../images/tags/sonya200/city/newyork/viewwithbinoculars.jpeg"
            alt="View with Binoculars"
          />
          <StaticImage
            src="../../../images/tags/sonya200/city/newyork/highlineprideflag.jpeg"
            alt="Pride Flag from High Line"
          />
          <StaticImage
            src="../../../images/tags/sonya200/Street with car.jpeg"
            alt="Car in St Petersburg"
          />
        </div>

        <div className="column">
          <StaticImage
            src="../../../images/tags/sonya200/city/newyork/streetcarnegiehall.jpeg"
            alt="Street Near Carnegie Hall"
          />
          <StaticImage
            src="../../../images/tags/sonya200/city/newyork/emergencycallbox.jpeg"
            alt="Emergency Call Box"
          />
          <StaticImage
            src="../../../images/tags/sonya200/sitgesharbour.jpeg"
            alt="Boats, Sitges Harbour"
          />
        </div>
      </div>
      <div className="twocolrow">
        <div className="twocolcolumn"></div>

        <div className="twocolcolumn"></div>
      </div>
    </>
  );
}
