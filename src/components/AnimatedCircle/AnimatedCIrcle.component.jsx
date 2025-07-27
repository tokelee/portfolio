import React from "react";
import "./AnimatedCircle.css";

function AnimatedCircle() {
  return (
    <>
      <div className="loader">
        <div className="face face1">
          <div className="circle"></div>
        </div>
        
        <a className="cvhover" href="https://docs.google.com/document/d/1uJl_nBzmNHTVtw-MwRdnialM19DVVYWEndG4YtJa2Hk/edit?usp=sharing">
          <div className="face face3">
            <p> &lt;a&gt; View CV &lt;/a&gt;</p>

            <div className="circled"></div>
          </div>
        


          <div className="face face2">
            <div className="circle"></div>
          </div>{" "}
        </a>
      </div>
    </>
  );
}

export default AnimatedCircle;
