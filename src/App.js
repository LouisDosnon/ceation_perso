import React from 'react';
import SelectionRaceToClasse from './SelectionRaceToClasse';
import SelectionClasseToRace from './SelectionClasseToRacee';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Race => Classe:</h2>
        <SelectionRaceToClasse />
        <h2>Classe => Race:</h2>
        <SelectionClasseToRace />
      </header>
    </div>
  );
}

export default App;
