import React, { Component } from 'react';
import emoji from './emoji.svg';


export class Instruction extends Component {

  render() {
    return(
    	  <div className="instruction">
    	  <img alt="laughing crying emoji" src={emoji} />
      	  <p>Click on an emoji to view the emoji short name.</p>

      	</div>
    )
  }

}
export default Instruction;