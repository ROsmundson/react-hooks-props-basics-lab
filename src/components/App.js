import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";

// pass this data down as props to the child component(s) that need it!

//In the `App` component, pass down data from the `user` object as props to the `Home` component so that it renders correctly.
function App() {
  return (
    <div>
      <NavBar />
      <Home color = { user.color } name = { user.name } city = { user.city }/>
      <About bio = { user.bio } links = { user.links }/>
    </div>
  );
}

export default App;

