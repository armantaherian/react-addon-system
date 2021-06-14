import React from "react";
import { AppCore } from "../plugins/loadModules";

function Navigation() {
  return (
    <nav className="app-nav">
      <ul>
        {AppCore.getMenuItems().map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
