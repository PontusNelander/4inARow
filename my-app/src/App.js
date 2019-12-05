import React, {Component} from 'react';
import GameDisplay from './components/GameDisplay';
import GameStats from './components/GameStats';

class App extends Component {
    render () {
        return (
            <div>
            <GameDisplay />
            <GameStats />
            </div>
        )
    }
}

export default App;
