import { useState } from "react";
import { range, random } from "lodash";
import { Pokemon } from "./Pokemon";
import "./App.css";

const pokemonNames = ["bulbasaur", "pikachu"];
const arr = range(100);
export function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setVisible((v) => !v)}>Toggle List</button>
      {visible && (
        <ul className="pokemon">
          {arr.map((val) => (
            <Pokemon
              key={val}
              name={pokemonNames[random(0, pokemonNames.length - 1)]}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
