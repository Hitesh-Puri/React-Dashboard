import React from "react";
import "./menu.scss";
import { Link, useLocation } from "react-router-dom";
import { menu } from "../../utility/data";

function Menu() {
  const location = useLocation();

  return (
    <div className="menu">
      {menu.map((item) => (
        <Link
          to={item.url}
          className={`menu-item ${
            location.pathname === item.url ? "active" : ""
          }`}
          key={item.id}
        >
          <ion-icon name={item.icon}></ion-icon>
          <span className="listItemTitle">{item.title}</span>
        </Link>
      ))}
    </div>
  );
}

export default Menu;
