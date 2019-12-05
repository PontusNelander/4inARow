import React, {Component} from 'react';

class GameStats extends Component {

    state = { red: this.props.turnRed, numberOfMoves: this.props.numberOfMoves}
    render() {
        return (
            <div>
            <div>Turn: {this.state.red ? "red" : "yellow"}</div>
            <div>Number of moves: {this.state.numberOfMoves}</div>
            </div>
        )
    }
}

export default GameStats