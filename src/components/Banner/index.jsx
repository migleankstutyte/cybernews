import React from "react";
import { Refresh } from "../../images/Refresh";

const Banner = () => {
  const checkboxes = [
    {
      id: "lowerCase",
      text: "lower case",
    },
    {
      id: "upperCase",
      text: "upper case",
    },
    {
      id: "specialSymbols",
      text: "special symbols",
    },
    {
      id: "numbers",
      text: "numbers",
    },
  ];

  return (
    <section className="banner">
      <h1 className="text">Generate strong passwords</h1>
      <p className="text text--small">
        Upgrade the security of your online accounts.{" "}
      </p>
      <p className="text text--small">
        Create strong passwords that are completely random and impossible to
        guess.
      </p>
      <div className="actions">
        <div className="actions__element">
          <input />
          <button>
            <Refresh />
          </button>
        </div>
        <button className="actions__element actions__element--button">
          Copy Password
        </button>
      </div>
      <div className="options">
        {checkboxes.map((item) => {
          return (
            <div className="options__option">
              <input type="checkbox" id={item.id} name={item.id} />
              <label for={item.id}>{item.text}</label>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Banner;
