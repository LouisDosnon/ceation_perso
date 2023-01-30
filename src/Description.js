import React, {useState} from "react";
import Modal from "./modal";

class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = { classe : props.classe, race: props.race};
    }

    render() {
        let caracRace = this.state.race.caracteristique;

        return (
            <div className="box">
                <h3>{this.state.classe.name}</h3>
                <h4>caracteristique</h4>
                <ul>
                    <li>adresse : {this.max(caracRace.adr_min, this.state.classe.caracteristique.adr_min)} -> {this.min(caracRace.adr_max, this.state.classe.caracteristique.adr_max)}</li>
                    <li>charisme : {this.max(caracRace.cha_min, this.state.classe.caracteristique.cha_min)} -> {this.min(caracRace.cha_max, this.state.classe.caracteristique.cha_max)}</li>
                    <li>courage : {this.max(caracRace.cou_min, this.state.classe.caracteristique.cou_min)} -> {this.min(caracRace.cou_max, this.state.classe.caracteristique.cou_max)}</li>
                    <li>force : {this.max(caracRace.fo_min, this.state.classe.caracteristique.fo_min)} -> {this.min(caracRace.fo_max, this.state.classe.caracteristique.fo_max)}</li>
                    <li>intelligence : {this.max(caracRace.int_min, this.state.classe.caracteristique.int_min)} -> {this.min(caracRace.int_max, this.state.classe.caracteristique.int_max)}</li>
                </ul>
                <h4>competence</h4>
                <ul>
                    {
                        this.state.classe.competence.map(comp => {
                            return (
                                <li>{comp}</li>
                            );
                        })
                    }
                    {
                        this.state.race.competence.map(comp => {
                            if (!this.state.classe.competence.includes(comp)){
                                return(
                                    <li>{comp}</li>
                                );
                            }
                        })
                    }
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
}

export { Description };