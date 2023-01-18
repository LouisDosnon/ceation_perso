import React from "react";
import Races from "./data/race.json";
import Classes from "./data/classe.json";
import Compatibilite from "./data/compatibilite.json";
import { Description } from "./Description";

class SelectionRaceToClasse extends React.Component {
    constructor(props) {
        super(props);
        this.state = { race : "0"};
        this.handleChangeRace = this.handleChangeRace.bind(this);
    }

    render() {
        return (
            <div>
                <h2>Race => Classe:</h2>
                <select name="race" id="select_race" onChange={this.handleChangeRace}>
                    {Races.map(race => (
                        <option value={Races.indexOf(race)}>{race.name}</option>
                    ))}
                </select>
                <p id="race">race : {Races[this.state.race].name}</p>
                <p id="classe">classe :</p>
                <div className="container">
                    {Classes.map(classe => {
                        let compatible = {
                            "race": Races[this.state.race].name,
                            "classe": classe.name
                        };
                        if (JSON.stringify(Compatibilite).includes(JSON.stringify(compatible))) {
                            let carac = Races[this.state.race].caracteristique
                            return (
                                <Description classe={classe} race={Races[this.state.race]} />
                            );
                        }
                    })}
                </div>
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
        }, () => {
            console.log(this.state);
        });
    }
}

export { SelectionRaceToClasse };