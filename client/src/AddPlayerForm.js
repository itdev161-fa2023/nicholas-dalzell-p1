import React from 'react';
import axios from 'axios';

//AddPlayerForm
class AddPlayerForm extends React.Component {
    constructor(){
        super()
        this.addPlayerHandler = this.addPlayerHandler.bind(this);
    }

    state = {
        "playerName": null,
        "playerPosition": null,
        "playerNumber": null
    }

    //handler for data input
    inputChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //handler for adding player
    async addPlayerHandler(event) {
        event.preventDefault();
        console.log("click");
        console.log(this.state)
        await axios.post('http://localhost:5000/api/add-player', this.state)
        .then()
        .catch((error) => {
            console.error(`Error adding item: ${error}`)
        })
    }

    //returns input information from form
    render() {
        return (
            <section id="add-player">
                <form onSubmit={this.addPlayerHandler}>
                    <table>
                        <thead><tr>
                            <td>Player</td><td>Position</td><td>Number</td>
                        </tr></thead>
                        <tbody>
                            <tr>
                                <td><input name="playerName" onChange={this.inputChangeHandler}/></td>
                                <td><input name="playerPosition" onChange={this.inputChangeHandler}/></td>
                                <td><input name="playerNumber" onChange={this.inputChangeHandler}/></td>
                            </tr>
                            <tr>
                                <td>---</td>
                                <td><button type="submit">Add Player</button></td>
                                <td>---</td>
                            </tr>
                    </tbody>
                    </table>
                </form> 
            </section>
        )
    }
}

export default AddPlayerForm;