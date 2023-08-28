import React from "react";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar"
import {username,city,image} from "../data/user";

function App() {

  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
