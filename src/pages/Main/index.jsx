import React from "react";
import { Header, Banner, Image, Content } from "../../components";
import security from "../../images/Security.svg";
import measure from "../../images/Measure.svg";
import { data } from "./constant";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="wrapper">
        <p className="info">
          Our readers help us create quality content. If you purchase via links
          on our site, we may receive affiliate commissions.{" "}
          <a className="info info--bold" href="/">
            Learn more
          </a>
        </p>
        <Banner />
        <div className="container">
          <section className="section">
            <Image svg={security} />
            <Content title={data[0].title} data={data[0].data} />
          </section>
          <section className="section">
            <Content title={data[1].title} data={data[1].data} />
            <Image svg={measure} alignment="right" />
          </section>
        </div>
      </div>
    </div>
  );
};
export default Main;
