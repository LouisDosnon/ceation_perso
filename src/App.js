import React from 'react';
import './App.css';
import { SelectionRaceToClasse } from './SelectionRaceToClasse';
import { SelectionClasseToRace } from './SelectionClasseToRace';



function App() {
  return (
    <div className="App background-slideshow">
      <header className="App-header">
          <h1>Creation perso</h1>
      </header>
      <body className="App-body">
        <h2>Race => Classe:</h2>
        <SelectionRaceToClasse />
        <h2>Classe => Race:</h2>
        <SelectionClasseToRace />
      </body>
    </div>
  );
}

export default App;
