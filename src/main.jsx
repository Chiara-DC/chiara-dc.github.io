import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Photography from "./Photography.jsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<Home />} />
        <Route exact path="/photography" element={<Photography />} />
        <Route path="*" element={<Home />} />
        {/* <Route path="/blog/:blogId" element={<Blog />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);
