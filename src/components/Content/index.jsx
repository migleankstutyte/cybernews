import React from "react";

const Content = ({ title, data }) => {
  return (
    <div className="content">
      <h1>{title}</h1>
      <div className="content__text">
        {data.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default Content;
