import React from "react";

import "../../media/css/Components/Navigation.css";

function Navigation(props) {
  const navigationItem = props.navigationList.map((navItem) => {
    return (
      <li className="navigation__link" key={navItem.id}>
        <a href="#" className={navItem.isLogo ? "navigation__link_logo" : ""}>
          {navItem.title}
        </a>
      </li>
    );
  });
  return (
    <nav className="navigation">
      <ul className="navigation__list">{navigationItem}</ul>
    </nav>
  );
}

export default Navigation;
