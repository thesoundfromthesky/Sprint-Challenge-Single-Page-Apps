import React, { useEffect, useState } from "react";
import axios from "axios";
import mockup from "../mockup";

import CharacterCard from "./CharacterCard";

const dev = false;

export default function CharacterList({ term }) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(_ => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    (async _ => {
      if (dev) {
        await new Promise((resolve, reject) => {
          setTimeout(_ => {
            setCharacters([...mockup.results]);
            resolve();
          }, 300);
        });
      } else {
        const res = await axios.get(
          "https://rickandmortyapi.com/api/character/"
        );
        setCharacters([...res.data.results]);
        console.log(res);
      }
    })();
  }, []);

  return (
    <section className="character-list">
      {term
        ? characters
            .filter(character => new RegExp(term, "gi").test(character.name))
            .map(character => (
              <CharacterCard key={character.id} character={character} />
            ))
        : characters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
    </section>
  );
}
