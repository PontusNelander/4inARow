import React, {Component} from 'react';
import Empty from './img/EmptySpace.PNG';
import redPlupp from './img/RedSpace.PNG';
import gulPlupp from './img/YellowSpace.PNG';
import ChildStyle from './ChildStyle.css';


class Child extends Component {
    state={isAvailable : true, isRed: true}

    addPlupp = () => {


        this.setState(x => {
            return {isAvailable: false}
        })
        this.props.checkAvailable(this.state.isAvailable)

    }

    render() {
        return (
            <div className="child" onClick={() => this.addPlupp()} style={{backgroundImage: this.state.isAvailable ? `url(${Empty})` : this.state.isRed ? `url(${redPlupp})` : `url(${gulPlupp})` }}>
                &nbsp;
                </div>
        )
    }
}

export default Child