import React from 'react';
const test = require("./jsons/test.json");
function Testjson(props) {

    return<div>
        <body>
        <div className="container">
        <a href="https://www.condenast.com" target="_blank"><h1>{test.name}</h1></a>
        <a href="https://www.linkedin.com/company/conde-nast" class="fa fa-linkedin"></a>
        <a href="https://www.instagram.com/condenast/" class="fa fa-instagram"></a>
        <a href="https://twitter.com/condenast" class="fa fa-twitter"></a>
        
        <h>Share:  </h>
        <div class="dropdown">
  <button class="dropbtn">EN</button>
  <div class="dropdown-content">
    <a href="https://code.condenast.com/fr">FR</a>
    <a href="https://code.condenast.com/it">IT</a>
    <a href="https://code.condenast.com/pt">PT</a>
  </div>
</div>

        <p class="menu-center">{test["menutitle"]}</p>

        <h2 class="list-horizontal">
            <li>1. Why we're here </li>
            <li>2. What we believe </li>
            <li>3. Our commitment </li>
            </h2>
        </div>

    <footer>
    <h3>{test.ftag}</h3>

    </footer>
    </body>
        </div>;
        
}

export default Testjson;