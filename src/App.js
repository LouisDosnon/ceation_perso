import React from 'react';
import Races from './data/race.json';
import Classes from './data/classe.json';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Race => Classe:</h2>
        <SelectionRaceToClasse />
      </header>
    </div>
  );
}

class SelectionRaceToClasse extends React.Component {
    constructor(props) {
        super(props);
        this.state = { race : "0", min : Races[0].min, max : Races[0].max};
        this.handleChangeRace = this.handleChangeRace.bind(this);
    }

    render() {
        return (
            <div>
                <select name="race" id="select_race" onChange={this.handleChangeRace}>
                    {Races.map(race => (
                        <option value={Races.indexOf(race)}>{race.name}</option>
                    ))}
                </select>
                <p id="race">race : {Races[this.state.race].name}</p>
                <p id="classe">classe :</p>
                <ul>
                    {Classes.map(classe => {
                        let classe_incompatible = Races[this.state.race].classe_incompatible;
                        if (!classe_incompatible.includes(classe.name)) {
                            let carac = Races[this.state.race].caracteristique
                            return (
                                <li>{classe.name} :
                                    <ul>
                                        <li>adresse : {this.max(carac.adr_min, classe.caracteristique.adr_min)} -> {this.min(carac.adr_max, classe.caracteristique.adr_max)}</li>
                                        <li>charisme : {this.max(carac.cha_min, classe.caracteristique.cha_min)} -> {this.min(carac.cha_max, classe.caracteristique.cha_max)}</li>
                                        <li>courage : {this.max(carac.cou_min, classe.caracteristique.cou_min)} -> {this.min(carac.cou_max, classe.caracteristique.cou_max)}</li>
                                        <li>force : {this.max(carac.fo_min, classe.caracteristique.fo_min)} -> {this.min(carac.fo_max, classe.caracteristique.fo_max)}</li>
                                        <li>intelligence : {this.max(carac.int_min, classe.caracteristique.int_min)} -> {this.min(carac.int_max, classe.caracteristique.int_max)}</li>
                                    </ul>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        );
    }

    max(a, b) {
        if (a>b) {
            return a;
        } else {
            return b;
        }
    }

    min(a, b) {
        if (a<b) {
            return a;
        } else {
            return b;
        }
    }

    handleChangeRace(e) {
        this.setState({
            race : e.target.value,
            min :  Races[e.target.value].min,
            max :  Races[e.target.value].max
        }, () => {
            console.log(this.state);
        });
    }
}

export default App;
