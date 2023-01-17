import React from "react";
import Races from "./data/race.json";
import Classes from "./data/classe.json";
import Compatibilite from "./data/compatibilite.json";

class SelectionClasseToRace extends React.Component {
    constructor(props) {
        super(props);
        this.state = { classe : "0"};
        this.handleChangeClasse = this.handleChangeClasse.bind(this);
    }

    render() {
        return (
            <div>
                <select name="race" id="select_classe" onChange={this.handleChangeClasse}>
                    {Classes.map(classe => (
                        <option value={Classes.indexOf(classe)}>{classe.name}</option>
                    ))}
                </select>
                <p id="classe">classe : {Classes[this.state.classe].name}</p>
                <p id="race">race :</p>
                <ul>
                    {Races.map(race => {
                        let compatible = {
                            "race": race.name,
                            "classe": Classes[this.state.classe].name
                        };
                        if (JSON.stringify(Compatibilite).includes(JSON.stringify(compatible))) {
                            let carac = Classes[this.state.classe].caracteristique
                            return (
                                <li>{race.name} :
                                    <ul>
                                        <li>adresse : {this.max(carac.adr_min, race.caracteristique.adr_min)} -> {this.min(carac.adr_max, race.caracteristique.adr_max)}</li>
                                        <li>charisme : {this.max(carac.cha_min, race.caracteristique.cha_min)} -> {this.min(carac.cha_max, race.caracteristique.cha_max)}</li>
                                        <li>courage : {this.max(carac.cou_min, race.caracteristique.cou_min)} -> {this.min(carac.cou_max, race.caracteristique.cou_max)}</li>
                                        <li>force : {this.max(carac.fo_min, race.caracteristique.fo_min)} -> {this.min(carac.fo_max, race.caracteristique.fo_max)}</li>
                                        <li>intelligence : {this.max(carac.int_min, race.caracteristique.int_min)} -> {this.min(carac.int_max, race.caracteristique.int_max)}</li>
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

    handleChangeClasse(e) {
        this.setState({
            classe : e.target.value
        }, () => {
            console.log(this.state);
        });
    }
}

export { SelectionClasseToRace };