import React from "react";
import Photo from "../assets/imgs/nubia-navarro.jpg";

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <div className="home__left">
          <h1>Travel The Globe</h1>
          <p>
            Eleifend et purus at, ullamcorper efficitur urna. Proin dapibus
            sapien ut tempor vehicula. Fusce sit amet justo nec risus aliquam
            vestibulum ut non mauris.
          </p>
          <form
            onClick={(e) => {
              e.preventDefault();
            }}
            className="home__form"
          >
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
          </form>
        </div>
        <div className="home__right">
          <img src={Photo} className="right__photo" alt="nubia" />
        </div>
      </div>
    </div>
  );
};

export default Home;
