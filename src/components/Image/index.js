import React from "react";

const Image = ({ svg, name, alignment }) => {
  return (
    <div className="image">
      <img src={svg} alt={name} className={alignment && "right"} />
    </div>
  );
};

export default Image;
