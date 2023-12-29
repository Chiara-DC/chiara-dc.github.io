import * as React from "react";
import Navbar from "./components/Navbar";
import { Link } from "gatsby";
import "./styles/index.css";

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <div className="text">
        <h1>Page Not Found</h1>
        <p>
          There has been a 404 error (page not found). Sorry! Perhaps there was
          a spelling error in the URL?
        </p>
        <p>
          <Link to="/">Return to the Home Page.</Link>
        </p>
      </div>
    </>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
