import "./Portfolio.css";
import * as React from "react";
import { column1, column2, column3 } from "../../data/images.js";

export default function Portfolio() {
  return (
    <>
      <div className="row">
        <div className="column">
          {column1.map((image) => (
            <img src={image.url} alt={image.alt} key={image.alt} width="100%" />
          ))}
        </div>

        <div className="column">
          {column2.map((image) => (
            <img src={image.url} alt={image.alt} key={image.alt} width="100%" />
          ))}
        </div>

        <div className="column">
          {column3.map((image) => (
            <img src={image.url} alt={image.alt} key={image.alt} width="100%" />
          ))}
        </div>
      </div>
    </>
  );
}
