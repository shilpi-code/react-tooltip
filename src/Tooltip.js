import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = (props) => {
  const [active, setActive] = useState(false);
  let timeout
  //   function to show the tooltip
  function showtooltip() {
  timeout= setTimeout(()=>{
    setActive(true);
 },300)
  }

  //   function to hide to tooltip
  function hidetooltip() {
    clearInterval(timeout);
    setActive(false);
  }

  return (
    <>
      <h2 className="tooltip-heading">Hover over me to see who I am :p</h2>
      <div
        className="wrapper"
        onMouseEnter={showtooltip}
        // onMouseLeave={hidetooltip}
      >
        {active && (
          <div className={`tooltip ${props.direction}`}>
            <p id="tooltip-text">Hi, I'm a duck. Quack-Quack!</p>
          </div>
        )}
        <span className="tooltip-emoji" role="img" aria-label="duck emoji">
          🦆
        </span>
      </div>
    </>
  );
};

export default Tooltip;
