import React, { Component } from "react";
import "./navbar.css";

class navbar extends Component {
  render() {
    return (
      <>
        <nav className="nav-container">
          LOGO
          <ul className="list-items">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </nav>{" "}
      </>
    );
  }
}

export default navbar;
