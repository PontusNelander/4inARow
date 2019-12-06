import React, { Component } from 'react';
import Empty from './img/EmptySpace.PNG';
import redPlupp from './img/RedSpace.PNG';
import gulPlupp from './img/YellowSpace.PNG';
import ChildStyle from './ChildStyle.css';
import GameDisplay from './GameDisplay.js'


class Child extends Component {
    state={isAvailable : true, isRed: 0, img: `url(${Empty})`}

    addPlupp = (x) => {

        if(x === true){
            this.setState(x => {
    
               
                    return {img: `url(${redPlupp})`,isRed: 1}
                
            })

        }
        else{
            this.setState(x => {
    
                
                return {img: `url(${gulPlupp})`,isRed: 2}
            
            })
        }
        this.props.checkAvailable(this.state.isAvailable)
        
    }
    // this.state.isAvailable ? this.state.img : this.state.isRed ? `url(${redPlupp})` : `url(${gulPlupp})` 
    render() {
        return (
            <div className="child" style={{backgroundImage: this.state.img}}>
                &nbsp;
                </div>
        )
    }
}

export default Child
