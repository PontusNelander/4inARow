import React, { Component } from 'react';

class GameStats extends Component {

    state = { red: this.props.turnRed, numberOfMoves: this.props.numberOfMoves}
    render() {

        return (
            <div>
                Game Stats!
                <button onClick={this.refresh}>NewGame</button>
            </div>

        )
    }
}

export default GameStats
