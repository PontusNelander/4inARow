import React, {Component} from 'react';
import Empty from './EmptySpace.PNG';
import redPlupp from './RedSpace.PNG';
import gulPlupp from './YellowSpace.PNG';

class Child extends Component {
    state={isAvailable : false, red: false}
    render() {
        return (
            <div style={{backgroundImage: this.state.isAvailable ? `url(${Empty})` : this.state.red ? `url(${redPlupp})` : `url(${gulPlupp})` }}>Child!</div>
        )
    }
}

export default Child