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
    wrapper = (child) => {
        child.addPlupp(this.state.turnRed);
        this.isValidMove(child.props.checkAvailable);
        
    }

    checkColumn = (x) => {


        for (let i = 5; i >= 0; i--) {

            if (this.state.children[i][x].ref.current.state.isAvailable) {
                this.state.children[i][x].ref.current.state.isAvailable = false;
                this.wrapper(this.state.children[i][x].ref.current) 
                this.checkFor4IAR();               
                break;
            }
        }
    }
    checkFor4IAR(x){
        var playingField = this.state.children;
        for (let y = 0; y < 6; y++){
            for (let x = 0; x < 7; x++)
            { 
                //horisontellt spelare röd
                if (x <=3 && playingField[y][x].ref.current.state.isAvailable === false && playingField[y][x].ref.current.state.isRed === 1)
                {
                    if (playingField[y][x+1].ref.current.state.isAvailable === false && playingField[y][x+1].ref.current.state.isRed === 1 
                        && playingField[y][x + 2].ref.current.state.isAvailable === false && playingField[y][x+2].ref.current.state.isRed === 1
                        && playingField[y][x + 3].ref.current.state.isAvailable == false && playingField[y][x+3].ref.current.state.isRed === 1)
                    {
                        console.log("Yellow wins, wanna play again?")
                        if(window.confirm("Red wins, wanna play again?")){window.location.reload()}
                    }
                }
                //vertikalt spelare röd
                if (y <=2 && playingField[y][x].ref.current.state.isAvailable === false && playingField[y][x].ref.current.state.isRed === 1)
                    {
                        if (playingField[y+1][x].ref.current.state.isAvailable === false && playingField[y+1][x].ref.current.state.isRed === 1 
                            && playingField[y+2][x].ref.current.state.isAvailable === false && playingField[y+2][x].ref.current.state.isRed  === 1
                            && playingField[y+3][x].ref.current.state.isAvailable == false && playingField[y+3][x].ref.current.state.isRed === 1)
                        {
                            console.log("Yellow wins, wanna play again?")
                           if(window.confirm("Red wins, wanna play again?")){window.location.reload()}
                        }
                    }
                //horisontellt spelare gul
                if (x <=3 && playingField[y][x].ref.current.state.isAvailable === false && playingField[y][x].ref.current.state.isRed === 2)
                {
                    if (playingField[y][x+1].ref.current.state.isAvailable === false &&  playingField[y][x+1].ref.current.state.isRed === 2
                        && playingField[y][x + 2].ref.current.state.isAvailable === false && playingField[y][x+2].ref.current.state.isRed === 2
                        && playingField[y][x + 3].ref.current.state.isAvailable == false && playingField[y][x+3].ref.current.state.isRed === 2)
                    {
                        console.log("Yellow wins, wanna play again?")
                        if(window.confirm("Yellow wins, wanna play again?")){window.location.reload()}
                    }
                }
                //vertikalt spelare gul
                if (y <=2 && playingField[y][x].ref.current.state.isAvailable === false && playingField[y][x].ref.current.state.isRed === 2)
                    {
                        if (playingField[y+1][x].ref.current.state.isAvailable === false && playingField[y+1][x].ref.current.state.isRed === 2
                            && playingField[y+2][x].ref.current.state.isAvailable === false && playingField[y+2][x].ref.current.state.isRed === 2
                            && playingField[y+3][x].ref.current.state.isAvailable === false && playingField[y+3][x].ref.current.state.isRed === 2)
                        {
                            console.log("Yellow wins, wanna play again?")
                            if(window.confirm("Yellow wins, wanna play again?"))
                            {window.location.reload()}
                        }
                }
                
                //Diagonal höger till vänster spelare Gul
                if (x <=3 && playingField[y][x].ref.current.state.isAvailable === false && playingField[y][x].ref.current.state.isRed === 2)
                {
                    if (playingField[y-1][x+1].ref.current.state.isAvailable === false &&  playingField[y-1][x+1].ref.current.state.isRed === 2
                        && playingField[y-2][x + 2].ref.current.state.isAvailable === false && playingField[y-2][x+2].ref.current.state.isRed === 2
                        && playingField[y-3][x + 3].ref.current.state.isAvailable == false && playingField[y-3][x+3].ref.current.state.isRed === 2)
                    {
                        console.log("Spelare Gul h -> v diagonal")
                        if(window.confirm("Yellow wins, wanna play again?"))
                            {window.location.reload()}
                    }
                }
                //Diagonal höger till vänster spelare röd
                if (x <=3 && playingField[y][x].ref.current.state.isAvailable === false && playingField[y][x].ref.current.state.isRed === 1)
                {
                    if (playingField[y-1][x+1].ref.current.state.isAvailable === false &&  playingField[y-1][x+1].ref.current.state.isRed === 1
                        && playingField[y-2][x + 2].ref.current.state.isAvailable === false && playingField[y-2][x+2].ref.current.state.isRed === 1
                        && playingField[y-3][x + 3].ref.current.state.isAvailable == false && playingField[y-3][x+3].ref.current.state.isRed === 1)
                    {
                        console.log("Spelare röd h -> v diagonal")
                        if(window.confirm("Red wins, wanna play again?"))
                            {window.location.reload()}
                    }
                }
                //Diagonal vänster höger spelare Gul
                if (x >= 3 && playingField[y][x].ref.current.state.isAvailable === false && playingField[y][x].ref.current.state.isRed === 2)
                {
                    if (playingField[y-1][x-1].ref.current.state.isAvailable === false &&  playingField[y-1][x-1].ref.current.state.isRed === 2
                        && playingField[y-2][x -2].ref.current.state.isAvailable === false && playingField[y-2][x-2].ref.current.state.isRed === 2
                        && playingField[y-3][x -3].ref.current.state.isAvailable == false && playingField[y-3][x-3].ref.current.state.isRed === 2)
                    {
                        console.log("Spelare Gul v -> h diagonal")
                        if(window.confirm("Yellow wins, wanna play again?"))
                            {window.location.reload()}
                    }
                }
                //Diagonal vänster höger spelare röd
                if (x >= 3 && playingField[y][x].ref.current.state.isAvailable === false && playingField[y][x].ref.current.state.isRed === 1)
                {
                    if (playingField[y-1][x-1].ref.current.state.isAvailable === false &&  playingField[y-1][x-1].ref.current.state.isRed === 1
                        && playingField[y-2][x - 2].ref.current.state.isAvailable === false && playingField[y-2][x-2].ref.current.state.isRed === 1
                        && playingField[y-3][x - 3].ref.current.state.isAvailable == false && playingField[y-3][x-3].ref.current.state.isRed === 1)
                    {
                        console.log("Spelare röd v -> h diagonal")
                        if(window.confirm("Red wins, wanna play again?"))
                            {window.location.reload()}
                    }
                }






            }
        }
    }






    refresh = () => {
        window.location.reload();
    }

    render() {
        return (
            <div>
                <div className="turnStyle">Turn: {this.state.turnRed ? "red" : "yellow"}</div>
                <div className="turnStyle">Number of moves: {this.state.numberOfMoves}</div>
                <button className="newGameStyle" onClick={this.refresh}>New Game!!</button>
                <div></div>
                <div>
                    <table>
                        <tr>
                            <td id={0} onClick={() => this.checkColumn(0)} ><OnMouse /></td>
                            <td id={1} onClick={() => this.checkColumn(1)} ><OnMouse /></td>
                            <td id={2} onClick={() => this.checkColumn(2)} ><OnMouse /></td>
                            <td id={3} onClick={() => this.checkColumn(3)} ><OnMouse /></td>
                            <td id={4} onClick={() => this.checkColumn(4)} ><OnMouse /></td>
                            <td id={5} onClick={() => this.checkColumn(5)} ><OnMouse /></td>
                            <td id={6} onClick={() => this.checkColumn(6)} ><OnMouse /></td>
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
