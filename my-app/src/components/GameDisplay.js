import React, {Component} from 'react';
import Child from './Child';

class GameDisplay extends Component {


    render() {
        return (
            <div>
            <div>Game Display!</div>
            <Child />
            </div>
        )
    }
}

export default GameDisplay