import React from 'react';
import './Instruction.css';
import emoji from './emoji.svg';


const Instruction = () =>
	(
    	  <div className="instruction">
    	  <img alt="laughing crying emoji" src={emoji} />
      	  <p>Click on an emoji to view the emoji short name.</p>
      	</div>
    )
export default Instruction;