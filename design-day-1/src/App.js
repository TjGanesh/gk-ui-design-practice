import React from "react";
import "./App.css";
import Navbar from "./comps/Navbar";
import Card from "./comps/Card";

function App() {
  return (
    <>
      <Navbar />
      <div class="app-container">
        <Card content="Gradiant Box" />
        <Card content="Gradiant Box 2" />
      </div>
    </>
  );
}

export default App;
