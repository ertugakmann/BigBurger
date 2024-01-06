import React from "react";
import { Data } from "../helpers/Data";

import "../styles/Menu.css";
import MenuCards from "./MenuCards";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Burgers</h1>
      <div className="menuList">
        {Data.map((burger, key) => {
          return (
            <MenuCards
              key={key}
              image={burger.image}
              name={burger.name}
              content={burger.content}
              price={burger.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
