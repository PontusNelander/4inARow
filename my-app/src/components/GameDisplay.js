import React, { Component } from 'react';
import Empty from './img/EmptySpace.PNG';
import redPlupp from './img/RedSpace.PNG';
import gulPlupp from './img/YellowSpace.PNG';
import Child from './Child';
import OnMouse from './onMouse';
import White from './img/WhitePiece.PNG'

class GameDisplay extends Component {
    constructor(props) {
        super(props);
        let z = []
        z = this.getChildren()
        this.state.children = z;
        console.log(this.state.children)
    }

    state = { children: [], turnRed: true, numberOfMoves: 0 }

    isValidMove = (x) => {
        x && this.setState((y) => {
            return {
                turnRed: !y.turnRed,
                numberOfMoves: y.numberOfMoves + 1
            }
        })
    }

    getChildren = () => {
        let z = []
        let index = 0;
        for (let x = 0; x < 6; x++) {
            let arr = []
            for (let y = 0; y < 7; y++) {
                let id = index;
                let childref = React.createRef()
                let child = <Child ref={childref} key={id} checkAvailable={this.isValidMove} />
                arr.push(child)
                index++;
            }
            z.push(arr)
        }
        return z
    }

    checkColumn = (x) => {




        // this.state.children[x].forEach(c => {
        //     if (c.ref.current.state.isAvailable) {
        //         this.setState(x => {
        //             return {
        //                 isAvailable: false,
        //                 // isRed: false,
        //                 img: `url(${gulPlupp})`

        //             }



        //         })

        //     }

        // });
        // console.log(this.state.children[x][2].ref.current.state.isAvailable)
        // this.state.children[x].map((c, index) => {
        //     if (c.ref.current.state.isAvailable) {

        //     }

        // })


        for (let i = 5; i >= 0; i--) {

            // console.log(this.state.children[x][i].ref.current.state.isAvailable)
            if (this.state.children[i][x].ref.current.state.isAvailable) {
                this.state.children[i][x].ref.current.state.isAvailable = false;
                this.state.children[i][x].ref.current.addPlupp(this.state.turnRed);
                break;
            }
        }
    }

    render() {
        return (
            <div>
                <div>Turn: {this.state.turnRed ? "red" : "yellow"}</div>
                <div>Number of moves: {this.state.numberOfMoves}</div>
                <div>Game Display!</div>
                <div>
                    <table>
                        <tr>
                            <td id={0} onClick={() => this.checkColumn(0)}><OnMouse /></td>
                            <td id={1} onClick={() => this.checkColumn(1)}><OnMouse /></td>
                            <td id={2} onClick={() => this.checkColumn(2)}><OnMouse /></td>
                            <td id={3} onClick={() => this.checkColumn(3)}><OnMouse /></td>
                            <td id={4} onClick={() => this.checkColumn(4)}><OnMouse /></td>
                            <td id={5} onClick={() => this.checkColumn(5)}><OnMouse /></td>
                            <td id={6} onClick={() => this.checkColumn(6)}><OnMouse /></td>
                        </tr>
                    </table>
                </div>
                <table className="tableStyle">
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
