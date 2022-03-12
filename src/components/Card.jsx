import React, { useState } from "react";

function Card({ music, setCurrentMusic }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className={"pointer" + (isSelected ? " selected" : "")}
      onClick={() => {
        setIsSelected(!isSelected);
        setCurrentMusic(music);
      }}
    >
      <div>
        <img src={music.album.cover_medium} />
      </div>
      <div>
        <p>{music.title}</p>
        <small>{music.album.title}</small>
      </div>
    </div>
  );
}

export default Card;
