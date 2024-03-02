import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/index.css";
import PhotoLayout from "../components/PhotoLayout";

const column1 = [
  {
    url: "https://www.dropbox.com/scl/fi/s0mh19xvbrojig5pvl6qn/IMG_HalfWayHall-18.jpg?rlkey=b3sb584em8djzuf9wzw9h73mp&raw=1",
    alt: "Christ's Halfway Hall, 2024, W&A",
    compressed: true,
    tags: ["halfway hall"],
    orientation: "horizontal",
  },
  {
    url: "https://www.dropbox.com/scl/fi/zyt14tkhk2ffl0jqjlrxb/IMG_HalfWayHall-27.jpg?rlkey=6k6di3bdsp2fiv8058n6fddui&raw=1",
    alt: "Christ's Halfway Hall, 2024, W&A",
    compressed: true,
    tags: ["halfway hall"],
    orientation: "horizontal",
  },
  {
    url: "https://www.dropbox.com/scl/fi/q8p87oxmz32znjplbinuh/IMG_HalfWayHall-17.jpg?rlkey=5icaadwr4y2gzwrjjmzuk17ni&raw=1",
    alt: "Christ's Halfway Hall, 2024, K&F",
    compressed: true,
    tags: ["halfway hall"],
    orientation: "horizontal",
  },
];

const column2 = [
  {
    url: "https://www.dropbox.com/scl/fi/5yx4t43pel61117zu66wx/IMG_HalfWayHall-4.jpg?rlkey=7icycy8novnu84rzvyhd3pqzy&raw=1",
    alt: "Christ's Halfway Hall, 2024, Table Setup",
    compressed: true,
    tags: ["halfway hall"],
    orientation: "horizontal",
  },
  {
    url: "https://www.dropbox.com/scl/fi/m4d7sl2ffv613u73auswa/IMG_HalfWayHall-33.jpg?rlkey=vfbao37xgddfaalp4gwqx1wlr&raw=1",
    alt: "Christ's Halfway Hall, 2024, E&A",
    compressed: true,
    tags: ["halfway hall"],
    orientation: "horizontal",
  },
  {
    url: "https://www.dropbox.com/scl/fi/dqm249ntf8xmlulxwyzhl/IMG_HalfWayHall-134.jpg?rlkey=1qnwacqmahx598rcu3ky6waqq&raw=1",
    alt: "Christ's Halfway Hall, 2024, E&V&M",
    compressed: true,
    tags: ["halfway hall"],
    orientation: "horizontal",
  },
];

const column3 = [
  {
    url: "https://www.dropbox.com/scl/fi/mdskq89b1mn94gbph0ia4/IMG_HalfWayHall-24.jpg?rlkey=famc1etg64xib52lxnkyjuv1z&raw=1",
    alt: "Christ's Halfway Hall, 2024, C&others",
    compressed: true,
    tags: ["halfway hall"],
    orientation: "horizontal",
  },
  {
    url: "https://www.dropbox.com/scl/fi/stwy6ijy8x6tgojvrqxxh/IMG_HalfWayHall-123.jpg?rlkey=mm63pbdaywmw2lbkyqsuudkfo&raw=1",
    alt: "Christ's Halfway Hall, 2024, F&A&A",
    compressed: true,
    tags: ["halfway hall"],
    orientation: "horizontal",
  },
  {
    url: "https://www.dropbox.com/scl/fi/clqb8ildlli34epgifn3q/IMG_HalfWayHall-69.jpg?rlkey=agdvo0wtp364plc2qona059tl&raw=1",
    alt: "Christ's Halfway Hall, 2024, E&E&N&B",
    compressed: true,
    tags: ["halfway hall"],
    orientation: "horizontal",
  },
];

const allcols = column1.concat(column2, column3);
const twocol1 = allcols.slice(0, 5);
const twocol2 = allcols.slice(5, 9);

const HalfWayHall = () => {
  return (
    <>
      <Navbar />
      <div className="text">
        <h1 id="about">Christ's Halfway Hall, 2024</h1>
      </div>
      <div className="home">
        <PhotoLayout
          column1={column1}
          column2={column2}
          column3={column3}
          twocol1={twocol1}
          twocol2={twocol2}
        />
      </div>
      <Footer />
    </>
  );
};

export default HalfWayHall;
