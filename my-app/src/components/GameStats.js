import React, { Component } from 'react';

class GameStats extends Component {
    refresh = () => {
        window.location.reload();
    }
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