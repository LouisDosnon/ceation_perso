import React from "react";
import Races from "./data/race.json";
import Classes from "./data/classe.json";
import Compatibilite from "./data/compatibilite.json";
import { Description } from "./Description";

class SelectionClasseToRace extends React.Component {
    constructor(props) {
        super(props);
        this.state = { classe : "0"};
        this.handleChangeClasse = this.handleChangeClasse.bind(this);
    }

    render() {
        return (
            <div>
                <h2>Classe => Race:</h2>
                <select name="race" id="select_classe" onChange={this.handleChangeClasse}>
                    {Classes.map(classe => (
                        <option value={Classes.indexOf(classe)}>{classe.name}</option>
                    ))}
                </select>
                <p id="classe">classe : {Classes[this.state.classe].name}</p>
                <p id="race">race :</p>
                <div className="container">
                    {Races.map(race => {
                        let compatible = {
                            "race": race.name,
                            "classe": Classes[this.state.classe].name
                        };
                        if (JSON.stringify(Compatibilite).includes(JSON.stringify(compatible))) {
                            let carac = Classes[this.state.classe].caracteristique
                            return (
                                <Description classe={Classes[this.state.classe]} race={race} />
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

    handleChangeClasse(e) {
        this.setState({
            classe : e.target.value
        }, () => {
            console.log(this.state);
        });
    }
}

export { SelectionClasseToRace };