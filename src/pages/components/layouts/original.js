import "../Portfolio.css";
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Layout() {
  return (
    <>
      <div className="row">
        <div className="column">
          <StaticImage
            src="../../../images/tags/iphone/city/newyork/skyview.jpeg"
            alt="New York City Skyview"
          />
          <StaticImage
            src="../../../images/tags/iphone/city/newyork/road.jpeg"
            alt="New York City Road"
          />
          <StaticImage
            src="../../../images/tags/iphone/Venice sunset.jpeg"
            alt="Venice Sunset"
          />
          <StaticImage
            src="../../../images/tags/iphone/city/newyork/chinatown.jpeg"
            alt="Chinatown, New York City"
          />
          <StaticImage
            src="../../../images/tags/iphone/cambridge/sideviewkingschapel.jpeg"
            alt="Side view of King's College Chapel"
          />
          <StaticImage
            src="../../../images/tags/sonya200/nature/twogoldfishswimming.jpeg"
            alt="Two goldfish swimming"
          />
          <StaticImage
            src="../../../images/tags/sonya200/nature/purplejellyfish.jpeg"
            alt="Purple jellyfish"
          />
          <StaticImage
            src="../../../images/tags/iphone/christmasatkew/purplespirallight.jpeg"
            alt="Purple spiral light, Christmas at Kew"
          />
        </div>

        <div className="column">
          <StaticImage
            src="../../../images/tags/iphone/city/newyork/viewwithbinoculars.jpeg"
            alt="View with Binoculars"
          />
          <StaticImage
            src="../../../images/tags/iphone/city/newyork/highlineprideflag.jpeg"
            alt="Pride Flag from High Line"
          />
          <StaticImage
            src="../../../images/tags/sonya200/Street with car.jpeg"
            alt="Car in St Petersburg"
          />
          <StaticImage
            src="../../../images/tags/iphone/cambridge/garretthostelbridgeview.jpeg"
            alt="View from Garrett Hostel Bridge"
          />
          <StaticImage
            src="../../../images/tags/iphone/cambridge/botanicalgardenschristmaslights.jpeg"
            alt="Christmas Lights, Cambridge Botanical Gardens"
          />
          <StaticImage
            src="../../../images/tags/sonya200/nature/wasponflower.jpeg"
            alt="Wasp on flower, Cambridge"
          />
        </div>

        <div className="column">
          <StaticImage
            src="../../../images/tags/iphone/city/newyork/streetcarnegiehall.jpeg"
            alt="Street Near Carnegie Hall"
          />
          <StaticImage
            src="../../../images/tags/iphone/city/newyork/emergencycallbox.jpeg"
            alt="Emergency Call Box"
          />
          <StaticImage
            src="../../../images/tags/sonya200/sitgesharbour.jpeg"
            alt="Boats, Sitges Harbour"
          />
          <StaticImage
            src="../../../images/tags/iphone/cambridge/westhubcambridge.jpeg"
            alt="West Hub, Cambridge"
          />
          <StaticImage
            src="../../../images/tags/iphone/christs/sunsetoverchrists.jpeg"
            alt="Sunset over Christ's College"
          />
          <StaticImage
            src="../../../images/tags/sonya200/nature/goldfishinaquarium.jpeg"
            alt="Goldfish in aquarium, Lisbon"
          />
          <StaticImage
            src="../../../images/tags/sonya200/nature/bluefishinaquarium.jpeg"
            alt="More fish (blue ones), Lisbon"
          />
          <StaticImage
            src="../../../images/tags/sonya200/cambridge/fitzmuseumdome.jpeg"
            alt="Fitzwilliam Museum Dome, Cambridge"
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
