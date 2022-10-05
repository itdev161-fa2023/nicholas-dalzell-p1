import React from 'react';
import axios from 'axios';

class PlayerAddForm extends React.Component {
    constructor(){
        super()
        this.playerAddHandler = this.playerAddHandler.bind(this);
    }

    state = {
        "playerName": null,
        "playerPosition": null,
        "playerNumber": null
    }

    inputChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    async playerAddHandler(event) {
        event.preventDefault();
        console.log("click");
        console.log(this.state)
        await axios.post('http://localhost:5000/api/player-add', this.state)
        .then()
        .catch((error) => {
            console.error(`Error adding item: ${error}`)
        })
    }

    render() {
        return (
            <section id="add-player">
              <form onSubmit={this.playerAddHandler}>
                <select name="playerName" onChange={this.inputChangeHandler}>
                </select>
                <input position="playerPosition" onChange={this.inputChangeHandler}/>
                <input number="playerNumber" onChange={this.inputChangeHandler}/>
                <button type="submit">Add</button>
              </form> 
            </section>
        )
    }
}

export default PlayerAddForm;