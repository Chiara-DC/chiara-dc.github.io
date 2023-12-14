import { useState } from "react";
import "../styles/Home.css";

function Photography() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text">
        <h1>Photography</h1>I have been an enthusiastic amateur photographer for
        many years, with experience photographing cityscapes, landscapes,
        wildlife, and macro photography (as well as occasional portrait photos
        for friends and family members). I currently use a Sony DLSR camera, and
        my portfolio can be found{" "}
        <a href="https://drive.google.com/file/d/1hTUZljMPPEmvEf9DuFZ0rIfoinZsykSa/view?usp=sharing">
          here!
        </a>
        {/* <p>
          Scientist, developer, and amateur photographer. Scientist, developer,
          and amateur photographer Scientist, developer, and amateur
          photographer Scientist, developer, and amateur photographerScientist,
          developer, and amateur photographer
        </p>
        <p>
          <strong>Nature Photography: </strong>as a Natural Sciences student, I
          am very interested in nature.{" "}
        </p>
        <p>
          <strong>Travel Photography:</strong> these photos. Mostly taken with a
          Sony DSLR camera.{" "}
        </p>
        <p>
          <strong>Microscope Photography:</strong> these photos are just a bunch
          of cool things I saw down a microscope! These were mostly taken with
          an iPhone 12 mini or iPhone SE down a microscope lens. Note: none of
          these images were captured digitally directly, and these aren’t
          representative of my recent research! (Many confocal images of
          Synechocystis sp. , a cyanobacterium).
        </p>
      </div>
      <div className="text">
        <h1>Highlights</h1>
      </div>
      <div className="text">
        <h1>Nature Photography</h1> */}
      </div>
    </>
  );
}

export default Photography;
