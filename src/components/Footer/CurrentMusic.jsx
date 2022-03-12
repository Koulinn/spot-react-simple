import React from "react";

function CurrentMusic({ currentMusic }) {
  return (
    <div>
      {currentMusic ? (
        <>
          <div>
            <img src={currentMusic.album.cover_medium} />
          </div>
          <div>
            <p>{currentMusic.title}</p>
            <p>{currentMusic.album.title}</p>
          </div>
        </>
      ) : (
        <p>'No music selected'</p>
      )}
    </div>
  );
}

export default CurrentMusic;
