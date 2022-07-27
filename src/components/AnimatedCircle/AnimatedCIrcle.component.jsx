import React from "react";
import "./AnimatedCircle.css";
import { Link } from "react-router-dom";

function AnimatedCircle() {
  return (
    <>
      <div className="loader">
        <div className="face face1">
          <div className="circle"></div>
        </div>
        
        <Link className="cvhover" to="/">
          <div className="face face3">
            <p> &lt;a&gt; Download CV &lt;/a&gt;</p>

            <div className="circled"></div>
          </div>
        


          <div className="face face2">
            <div className="circle"></div>
          </div>{" "}
        </Link>
      </div>
    </>
  );
}

export default AnimatedCircle;
