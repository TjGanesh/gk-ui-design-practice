import React from "react";
import "./App.css";
import Navbar from "./comps/Navbar";
import Card from "./comps/Card";

function App() {
  return (
    <>
      <Navbar />
      <Card content="Gradiant Box" />
      <Card content="Another Color" />
    </>
  );
}

export default App;
