import React from'react';

class Affichage extends React.Component{
    constructor(props) {
        super(props);
        console.log(props.value);
    }
    render(){
        return(
            <div>
                <p id="race">race</p>
                <p id="classe">classe</p>
            </div>
        );
    }
}

export { Affichage }