import React, {useState} from 'react';
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
            <SelectionRaceToClasse/>
            <SelectionClasseToRace/>
          </body>
        </div>
    );
}

export default App;
