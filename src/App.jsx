import React, { useEffect, useState } from "react";

import Card from "./components/Card";
import { Header } from "./components/Header";

import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  // Se ejecuta al momento del primer render
  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch("https://breakingbadapi.com/api/characters");
      const data = await response.json();
      setCharacters(data);
      setLoading(false);
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <p>Loading...</p>
      </>
    );
  }

  return (
    <React.Fragment>
      <Header />
      <main className="main">
        {characters.map((character) => (
          <Card
            key={character.char_id}
            name={character.name}
            occupation={character.occupation[0]}
            status={character.status}
            imageSrc={character.img}
          />
        ))}
      </main>
    </React.Fragment>
  );
}

export default App;
