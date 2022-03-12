import React from "react";
import { Link } from "react-router-dom";

function NavigationLink({ src, text, path }) {
  return (
    <li>
      <Link to={path}>
        <img src={src} />
        {text}
      </Link>
    </li>
  );
}

export default NavigationLink;
