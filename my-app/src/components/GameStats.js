import React, { Component } from 'react';

class GameStats extends Component {

    state = { red: this.props.turnRed, numberOfMoves: this.props.numberOfMoves}
    render() {

        return (
            <div>
<<<<<<< HEAD
                Game Stats!
                <button onClick={this.refresh}>NewGame</button>
            </div>

=======
            <div>Turn: {this.state.red ? "red" : "yellow"}</div>
            <div>Number of moves: {this.state.numberOfMoves}</div>
            </div>
>>>>>>> ca7836f... Moving work from child to game display since new approach to add tiles
        )
    }
}

export default GameStats
