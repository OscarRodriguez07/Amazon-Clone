import React from "react";
import "./home.css";
import Product from "./product";
function Home() {
  return (
    <div className="home">
      <img
        className={"homeImage"}
        src="https://m.media-amazon.com/images/I/61ASx7NHTWL._SX3000_.jpg"
        alt=""
      />
      <div className="home__container">
        <div className="home__row">
          <Product></Product>
        </div>
      </div>
    </div>
  );
}

export default Home;
