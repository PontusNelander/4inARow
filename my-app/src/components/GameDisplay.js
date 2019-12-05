import React, {Component} from 'react';
import Child from './Child';

class GameDisplay extends Component {
    constructor(props) {
        super(props);
        let z = []
        z = this.getChildren()
        this.state.children = z;
    }

    state = {children: []}

    getChildren = () => {
        let z = []
        for(let i = 0; i < 42; i++) {
            let id = i;
            let child = <Child isAvailable={true} isRed={true} key={id} />
            z.push(child)
        }
        return z
    }


    render()
    {
        return (
            <div>
            <div>Game Display!</div>

            <table>
                <tbody>
            <tr>
            {this.state.children.map((c,index) => { 
    return index < 7 && <td key={index}>{c}</td> })}
            </tr>
            <tr>
            {this.state.children.map((c,index) => { 
    return (index >= 7 && index < 14) && <td key={index}>{c}</td> })}
            </tr>
            <tr>
            {this.state.children.map((c,index) => { 
    return (index >= 14 && index < 21) && <td key={index}>{c}</td> })}
            </tr>
            <tr>
            {this.state.children.map((c,index) => { 
    return (index >= 21 && index < 28) && <td key={index}>{c}</td> })}
            </tr>
            <tr>
            {this.state.children.map((c,index) => { 
    return (index >= 28 && index < 35) && <td key={index}>{c}</td> })}
            </tr>
            <tr>
            {this.state.children.map((c,index) => { 
    return (index >= 35 && index < 42) && <td key={index}>{c}</td> })}
            </tr>
            </tbody>
            </table>


            </div>
        );
    }
}

export default GameDisplay