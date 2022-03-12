import React, { useState } from "react";
import Card from "../components/Card";

function Search({ setCurrentMusic }) {
  const [inputValue, setInputValue] = useState("");
  const [musicList, setMusicList] = useState([]);

  const searchRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + inputValue,
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

  return (
    <div>
      <form onSubmit={searchRequest}>
        <input type="text" onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">Search!</button>
      </form>
      <section>
        {musicList.map((music) => (
          <Card
            music={music}
            key={music.id}
            setCurrentMusic={setCurrentMusic}
          />
        ))}
      </section>
    </div>
  );
}

export default Search;
