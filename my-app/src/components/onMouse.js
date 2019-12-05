import React, {Component} from 'react';

class OnMouse extends Component {
    state = {
        img: "./img/EmptySpace.PNG"
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