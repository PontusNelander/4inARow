import React, { Component } from 'react';
import White from './img/WhitePiece.PNG'
import Red from './img/RedPiece.PNG'

class OnMouse extends Component {
  state = {
    img: White
  }
  changeImage = () => {
    this.setState(() => {
      return {img: }
    })
  }

  render() {
    return (
      <div>
        <img
              src={this.state.img}
              alt="plupps"
              onMouseEnter={() => {
                this.setState({
                  img: "./img/RedPiece.PNG"
                })
              }}
    
              onMouseOut={() => {
                this.setState({
                  img: "./img/EmptySpace.PNG"
                })
              }}
            />
      </div>
    )
  }
}
export default OnMouse;