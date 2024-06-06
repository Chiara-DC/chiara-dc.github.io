import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/index.css";
import Previous from "../components/layouts/PrevLayout";

const column1 = [
  {
    url: "https://www.dropbox.com/scl/fi/agjbtd7pxannaqskb42wq/IMG_4749-Enhanced-NR.jpg?rlkey=r7rhkm0s8ysiy6w6pwrzo2864&raw=1",
    alt: "Cambridge Half Marathon 2024, Info Sign",
    compressed: true,
    tags: ["half marathon"],
    orientation: "horizontal",
  },
  {
    url: "https://www.dropbox.com/scl/fi/mjjiwm9xvwc8qxdkh8fs4/IMG_4823-Enhanced-NR.jpg?rlkey=wjska2pix3jvn24dy8hdohgrb&raw=1",
    alt: "Cambridge Half Marathon 2024, Group of Men Running",
    compressed: true,
    tags: ["half marathon"],
    orientation: "horizontal",
  },
  {
    url: "https://www.dropbox.com/scl/fi/1r5ld615js65pgiyqfxeh/IMG_4751-Enhanced-NR.jpg?rlkey=bgmzq0ome53zeykgugofpwsmn&raw=1",
    alt: "Cambridge Half Marathon 2024, Road Closure Sign",
    compressed: true,
    tags: ["half marathon"],
    orientation: "horizontal",
  },
];

const column2 = [
  {
    url: "https://www.dropbox.com/scl/fi/a4po0qrtd2cjjix5f7jcm/IMG_4819-Enhanced-NR.jpg?rlkey=e1m73rzsf1egb32hoye8jjj8p&raw=1",
    alt: "Cambridge Half Marathon 2024, Crowd with Man Facing Camera",
    compressed: true,
    tags: ["half marathon"],
    orientation: "horizontal",
  },
  {
    url: "https://www.dropbox.com/scl/fi/2qkq33lidm2crt2hr1jh9/IMG_4794-Enhanced-NR.jpg?rlkey=7ttxgobvpvo6q01ppis20ibyh&raw=1",
    alt: "Cambridge Half Marathon 2024, Crowdsafe Staff in Hi-Vis",
    compressed: true,
    tags: ["half marathon"],
    orientation: "horizontal",
  },
  {
    url: "https://www.dropbox.com/scl/fi/htekxq3zzrs3s01gkikv2/IMG_4797-Enhanced-NR.jpg?rlkey=4nom5olnakzaixc288b3duqh9&raw=1",
    alt: "Cambridge Half Marathon 2024, Runners in Blue",
    compressed: true,
    tags: ["half marathon"],
    orientation: "horizontal",
  },
];

const column3 = [
  {
    url: "https://www.dropbox.com/scl/fi/neq8rvnu6g5vwx3q3dq9e/IMG_4793-Enhanced-NR.jpg?rlkey=63sgkmiznl2vv20f4k6xfruno&raw=1",
    alt: "Cambridge Half Marathon 2024, Security at Roundabout",
    compressed: true,
    tags: ["half marathon"],
    orientation: "horizontal",
  },
  {
    url: "https://www.dropbox.com/scl/fi/l7u0dz6ngtw4kex8prdye/IMG_4795-Enhanced-NR.jpg?rlkey=j3pgl0mlqdfzeyu42b3k59o87&raw=1",
    alt: "Cambridge Half Marathon 2024, CRUK Group",
    compressed: true,
    tags: ["half marathon"],
    orientation: "horizontal",
  },
  {
    url: "https://www.dropbox.com/scl/fi/6pjfn19jydodu9036cdcv/IMG_4822-Enhanced-NR.jpg?rlkey=w85bemuqze31wj7d32jbrhmre&raw=1",
    alt: "Cambridge Half Marathon 2024, Runners from Behind",
    compressed: true,
    tags: ["half marathon"],
    orientation: "horizontal",
  },
];

const allcols = column1.concat(column2, column3);
const twocol1 = allcols.slice(0, 5);
const twocol2 = allcols.slice(5, 9);

const CambridgeHalfMarathon = () => {
  return (
    <>
      <Navbar />
      <div className="text">
        <h1 id="about">Cambridge Half Marathon, 2024</h1>
      </div>
      <div className="home">
        <Previous
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

export default CambridgeHalfMarathon;

export const Head = () => (
  <title>Chiara DC - Projects - Cambridge Half Marathon</title>
);
