import "./Portfolio.css";
import * as React from "react";

export default function PhotoLayout({
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
          {column1?.map((image) => (
            <img src={image.url} alt={image.alt} key={image.alt} width="100%" />
          ))}
        </div>

        <div className="column">
          {column2?.map((image) => (
            <img src={image.url} alt={image.alt} key={image.alt} width="100%" />
          ))}
        </div>

        <div className="column">
          {column3?.map((image) => (
            <img src={image.url} alt={image.alt} key={image.alt} width="100%" />
          ))}
        </div>
      </div>
      <div className="twocolrow">
        <div className="twocolcolumn">
          {twocol1?.map((image) => (
            <img src={image.url} alt={image.alt} key={image.alt} width="100%" />
          ))}
        </div>

        <div className="twocolcolumn">
          {twocol2?.map((image) => (
            <img src={image.url} alt={image.alt} key={image.alt} width="100%" />
          ))}
        </div>
      </div>
    </>
  );
}
