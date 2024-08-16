import "../Portfolio.css";
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Varsity() {
  return (
    <>
      <div className="row">
        <div className="column">
          <a href="https://www.varsity.co.uk/arts/26034">
            <StaticImage
              className="staticimage"
              src="../../../images/varsity/varsitykettlesyard.PNG"
              // src="../../../images/tags/sonya200/cambridge/palestinianembroiderykettlesyard.jpeg"
              alt="Palestinian Embroidery Exhibit, Kettle's Yard"
            />
          </a>
          <a href="https://www.varsity.co.uk/lifestyle/27464">
            <StaticImage
              className="staticimage"
              // src="../../../images/portfolio/varsity8.jpg"
              src="../../../images/varsity/varsitylifestylenotebook.png"
              alt="Varsity Lifestyle Shoot"
            />
          </a>
          <a href="https://www.varsity.co.uk/interviews/27803">
            <StaticImage
              className="staticimage"
              src="../../../images/varsity/varsitybrendanburchell.png"
              alt="Brendan Burchell, Magdalene College President"
            />
          </a>
        </div>
        <div className="column">
          <a href="https://www.varsity.co.uk/comment/26944">
            <StaticImage
              className="staticimage"
              src="../../../images/varsity/varsityturing.PNG"
              // src="../../../images/tags/canoneos5d/varsity/turingstatue.jpg"
              alt="Turing Statue, King's College"
            />
          </a>
          <a href="https://www.varsity.co.uk/fashion/27597">
            <StaticImage
              className="staticimage"
              src="../../../images/varsity/varsityyearbook.png"
              alt="Beyond Black Tie (Cultural Wear Photoshoot)"
            />
          </a>
          <a href="https://www.varsity.co.uk/comment/28008">
            <StaticImage
              className="staticimage"
              src="../../../images/varsity/varsitysscbuilding.png"
              alt="Entrance to SSC Building"
            />
          </a>
        </div>
        <div className="column">
          <a href="https://www.varsity.co.uk/sport/27495">
            <StaticImage
              className="staticimage"
              // src="../../../images/tags/canoneos5d/varsity/netballcuppers2024/IMG_5167-Enhanced-NR.jpg"
              src="../../../images/varsity/varsitynetballcuppers.PNG"
              alt="Netball Cuppers Final"
            />
          </a>
          <a href="https://www.varsity.co.uk/lifestyle/27487">
            <StaticImage
              className="staticimage"
              // src="../../../images/portfolio/varsity9.jpg"
              src="../../../images/varsity/varsityagonyauntmaddy.png"
              alt="Varsity Agony Aunt"
            />
          </a>
          <a href="https://www.varsity.co.uk/features/27944">
            <StaticImage
              className="staticimage"
              src="../../../images/varsity/varsitywesthub.png"
              alt="West Hub Cafe"
            />
          </a>
        </div>
      </div>
    </>
  );
}
