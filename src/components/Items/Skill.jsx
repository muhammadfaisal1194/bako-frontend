import React from "react";

function Skill({ name }) {
  const winWidth = window.innerWidth;

  return (
    <div className="skill-item">
      <div className="skill-info clearfix">
        <h4 className="float-left mb-3 mt-0">{name}</h4>
      </div>
    </div>
  );
}

export default Skill;
