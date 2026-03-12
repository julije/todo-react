import { useState } from "react";

import "./App.css";

function App() {
  const [lista, setLista] = useState([]);
  const [stavka, setStavka] = useState("");

  return (
    <div className="omotac">
      <h1>TODO LISTA</h1>
      <div className="input-red">
        <input
          className="input-polje"
          type="text"
          placeholder="Upišite zadatak"
          onChange={(e) => setStavka(e.target.value)}
        />
        <button
          className="gumb-dodaj"
          onClick={() => {
            setLista([...lista, { tekst: stavka, zavrsen: false }]);
          }}
        >
          Dodaj
        </button>
      </div>
      <ul className="lista">
        {lista.map((zadatak, index) => (
          <li className="lista-stavka" key={index}>
            <span
              onClick={() => {
                const novaLista = lista.map((z, i) =>
                  i === index ? { ...z, zavrsen: !z.zavrsen } : z,
                );
                setLista(novaLista);
              }}
              style={{
                textDecoration: zadatak.zavrsen ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {zadatak.tekst}
            </span>
            <button
              className="gumb-obrisi"
              onClick={() => setLista(lista.filter((_, i) => i !== index))}
            >
              Obriši
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
