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
          <a href="https://www.varsity.co.uk/comment/28029">
            <StaticImage
              className="staticimage"
              src="../../../images/varsity/varsityreachout.png"
              alt="Reach Out posters, Christ's Library"
            />
          </a>
        </div>
        <div className="column">
          <a href="https://www.varsity.co.uk/comment/26944">
            <StaticImage
              className="staticimage"
              src="../../../images/varsity/varsityturing.PNG"
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
      <div className="twocolrow">
        <div className="twocolcolumn">
          <a href="https://www.varsity.co.uk/arts/26034">
            <StaticImage
              className="staticimage"
              src="../../../images/varsity/varsitykettlesyard.PNG"
              alt="Palestinian Embroidery Exhibit, Kettle's Yard"
            />
          </a>
          <a href="https://www.varsity.co.uk/comment/26944">
            <StaticImage
              className="staticimage"
              src="../../../images/varsity/varsityturing.PNG"
              alt="Turing Statue, King's College"
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
          <a href="https://www.varsity.co.uk/comment/28029">
            <StaticImage
              className="staticimage"
              src="../../../images/varsity/varsityreachout.png"
              alt="Reach Out posters, Christ's Library"
            />
          </a>
        </div>

        <div className="twocolcolumn">
          <a href="https://www.varsity.co.uk/sport/27495">
            <StaticImage
              className="staticimage"
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
          <a href="https://www.varsity.co.uk/comment/28008">
            <StaticImage
              className="staticimage"
              src="../../../images/varsity/varsitysscbuilding.png"
              alt="Entrance to SSC Building"
            />
          </a>
          <a href="https://www.varsity.co.uk/fashion/27597">
            <StaticImage
              className="staticimage"
              src="../../../images/varsity/varsityyearbook.png"
              alt="Beyond Black Tie (Cultural Wear Photoshoot)"
            />
          </a>
        </div>
      </div>
    </>
  );
}
