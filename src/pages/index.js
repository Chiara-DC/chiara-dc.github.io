import * as React from "react"
import "./styles/index.css";
import Navbar from "./components/Navbar"


const IndexPage = () => {
  return (
    <>
    <Navbar />
      <div className="home">
        <svg
          className="svgimage"
          width="304"
          height="304"
          viewBox="0 0 304 304"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="152" cy="152" r="152" fill="#0C265A" />
        </svg>
        <div className="title">
          <h1 className="name">Chiara DC</h1>
          <h2 className="">Scientist, developer, and amateur photographer</h2>
        </div>
      </div>
      <div className="text">
        <h1>About Me</h1>
        <p>
          Scientist, developer, and amateur photographer. Currently studying
          Physics.
        </p>

        <p>
          Scientist, developer, and amateur photographer. Scientist, developer,
          and amateur photographer. Scientist, developer, and amateur
          photographer. Scientist, developer, and amateur photographer.
          Scientist, developer, and amateur photographer.
        </p>
      </div>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
