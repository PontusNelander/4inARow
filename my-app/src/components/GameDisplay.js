import React, {Component} from 'react';
import Empty from './img/EmptySpace.PNG';
import redPlupp from './img/RedSpace.PNG';
import gulPlupp from './img/YellowSpace.PNG';
import Child from './Child';

class GameDisplay extends Component {
    constructor(props) {
        super(props);
        let z = []
        z = this.getChildren()
        this.state.children = z;
        console.log(this.state.children)
    }

    state = {children: [], turnRed: true, numberOfMoves: 0}

    isValidMove = (x) => {
        x && this.setState((y) => {
            return {turnRed: !y.turnRed,
            numberOfMoves: y.numberOfMoves+1}
        })
    }

    getChildren = () => {
        let z = []
        let index = 0;
        for(let x = 0; x<6; x++) {
            let arr=[]
            for(let y = 0; y < 7; y++) {
                let id = index;
                let child = <Child isAvailable={true} isRed={true} key={id} checkAvailable={this.isValidMove} />
                arr.push(child)
                index++;
            }
            z.push(arr)
        }
        return z
    }

    // click child


    render()
    {
        return (
            <div>
            <div>Turn: {this.state.turnRed ? "red" : "yellow"}</div>
            <div>Number of moves: {this.state.numberOfMoves}</div>
            <div>Game Display!</div>

            <table>
                <tbody>
                    {this.state.children.map((x, indexX) => {
                        return (<tr key={indexX}>
                        {x.map((y, indexY) => {
                        return <td key={indexY}>{y}</td>;
                        })}
                        </tr>);
                    })}

            </tbody>
            </table>
            </div>

        );
    }
}

export default GameDisplay
