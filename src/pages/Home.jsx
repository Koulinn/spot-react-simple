import React from "react";
import Section from "../components/Section";

function Home({ setCurrentMusic }) {
  return (
    <div>
      <Section genre="rock" setCurrentMusic={setCurrentMusic} />
      <Section genre="pop" setCurrentMusic={setCurrentMusic} />
      <Section genre="chill" setCurrentMusic={setCurrentMusic} />
    </div>
  );
}

export default Home;
