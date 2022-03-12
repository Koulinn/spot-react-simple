import React, { useEffect, useState } from "react";
import Card from "./Card";

function Section({ genre, setCurrentMusic }) {
  const [musicList, setMusicList] = useState([]);

  const getMusics = async () => {
    try {
      const response = await fetch(
        "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + genre,
        {
          headers: {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key":
              "7936e2646fmsheda4961f0b64102p1feadcjsn42edaa043d62",
          },
        }
      );

      const data = await response.json();
      setMusicList(data.data.slice(0, 5));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMusics();
  }, []);

  return (
    <section>
      {musicList.map((music) => (
        <Card music={music} key={music.id} setCurrentMusic={setCurrentMusic} />
      ))}
    </section>
  );
}

export default Section;
