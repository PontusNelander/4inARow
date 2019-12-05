import React, { Component } from 'react';
import White from './img/WhitePiece.PNG'
import Red from './img/RedPiece.PNG'

class OnMouse extends Component {

    state = {
        img: require('./img/white.png')
      }
    
      render() {
        return (
          <div>
            <img
              src={this.state.img}
              alt="plupps"
              onMouseEnter={() => {
                this.setState({
                  img: require('./img/REDCIRCLE.png')
                })
              }}
    
              onMouseOut={() => {
                this.setState({
                  img: require('./img/white.png')
                })
              }}
            />
      </div>
    )
  }
}
export default OnMouse;
