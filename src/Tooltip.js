import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = (props) => {
  const [active, setActive] = useState(false);
  function showtooltip() {
    setActive(true);
  }

  function hidetooltip() {
    setActive(false);
  }

  return (
    <div
      className="wrapper"
      onMouseEnter={showtooltip}
      onMouseLeave={hidetooltip}
    >
        {active && (<div className={`tooltip ${props.direction}`}><p>im a tooltip</p></div>)}
        <h1>tooltip </h1>
    </div>
  );
};

export default Tooltip;
