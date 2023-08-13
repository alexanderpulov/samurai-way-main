import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Title from "./components/Title";
import Ratings from "./components/Ratings";

function App() {
  return (
    <div className="App">
      <h1>Hello, samurai! Let's go!</h1>
      <hr />
      <Menu />
      <hr />
      <Title name="HTML/CSS" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
        reiciendis!
      </p>
      <Title name="JavaScript" />
      <p>Lorem ipsum dolor sit amet.</p>
      <hr />
      <Ratings />
    </div>
  );
}

export default App;
