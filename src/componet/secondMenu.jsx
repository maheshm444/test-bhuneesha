import React from "react";
import data from "./SecondMenu_data.json";
import "./SecondMenu.css";
function secondMenu(props) {
  return (
    <div class="container">
      {/* <img src={data.url}/> */}
      <div class="logo">{data.name}</div>
      <nav>
        <ol>
          <li>Why we are here</li>
          <li>what we believe</li>
          <li>Our commitment</li>
        </ol>
      </nav>
      <div className="sub-container">What we believe</div>
    </div>
  );
}

export default secondMenu;
