import React from "@types/react";
import Classes from "./data/classe.json";
import Races from "./data/race.json";

class SelectionClasseToRace extends React.Component {
    constructor(props) {
        super(props);
        this.state = { classe : "0", min_classe : Classes[0].min, max : Classes[0].max};
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
                <p id="race">racee :</p>
                <ul>
                    {Races.map(race => {
                        let classe_incompatible = Classes[this.state.classe].race_incompatible;
                        if (!classe_incompatible.includes(race.name)) {
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
            race : e.target.value,
            min :  Classes[e.target.value].min,
            max :  Classes[e.target.value].max
        }, () => {
            console.log(this.state);
        });
    }
}