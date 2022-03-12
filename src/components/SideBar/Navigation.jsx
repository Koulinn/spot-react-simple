import React from "react";
import NavigationLink from "./NavigationLink";

function Navigation() {
  return (
    <nav>
      <ul>
        <NavigationLink
          text={"Home"}
          src={"https://img.icons8.com/ios/344/home--v4.png 2x"}
          path={"/"}
        />
        <NavigationLink
          text={"Search"}
          src={"https://img.icons8.com/ios/344/home--v4.png 2x"}
          path={"/search"}
        />
        <NavigationLink
          text={"Create Playlist"}
          src={"https://img.icons8.com/ios/344/home--v4.png 2x"}
          path={"/playlist"}
        />
        <NavigationLink
          text={"Favorites"}
          src={"https://img.icons8.com/ios/344/home--v4.png 2x"}
          path={"/favorites"}
        />
      </ul>
    </nav>
  );
}

export default Navigation;
