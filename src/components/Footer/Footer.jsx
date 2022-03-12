import React from "react";
import CurrentMusic from "./CurrentMusic";
import PlayerControl from "./PlayerControl";
import VolumeControl from "./VolumeControl";

function Footer({ currentMusic }) {
  return (
    <footer>
      <CurrentMusic currentMusic={currentMusic} />
      <PlayerControl />
      <VolumeControl />
    </footer>
  );
}

export default Footer;
