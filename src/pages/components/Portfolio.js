import "./Portfolio.css";
import * as React from "react";
import { useState } from "react";
import { column1, column2, column3, allimages } from "../../data/images.js";
// import Modal from "./Modal.js";

export default function Portfolio() {
  const [modal, setModal] = useState(false);
  const twocol1 = allimages.slice(0, 18);
  const twocol2 = allimages.slice(18, 35);
  return (
    <>
      {/* {modal === false ? <></> : <Modal image={modal} />} */}
      <div className="row">
        <div className="column">
          {column1.map((image) => (
            <img
              src={image.url}
              alt={image.alt}
              key={image.alt}
              width="100%"
              onClick={(e) => {
                setModal(image);
              }}
            />
          ))}
        </div>

        <div className="column">
          {column2.map((image) => (
            <img
              src={image.url}
              alt={image.alt}
              key={image.alt}
              width="100%"
              onClick={(e) => setModal(image)}
            />
          ))}
        </div>

        <div className="column">
          {column3.map((image) => (
            <img
              src={image.url}
              alt={image.alt}
              key={image.alt}
              width="100%"
              onClick={(e) => setModal(image)}
            />
          ))}
        </div>
      </div>
      <div className="twocolrow">
        <div className="twocolcolumn">
          {twocol1.map((image) => (
            <img
              src={image.url}
              alt={image.alt}
              key={image.alt}
              width="100%"
              onClick={(e) => {
                setModal(image);
              }}
            />
          ))}
        </div>

        <div className="twocolcolumn">
          {twocol2.map((image) => (
            <img
              src={image.url}
              alt={image.alt}
              key={image.alt}
              width="100%"
              onClick={(e) => setModal(image)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
