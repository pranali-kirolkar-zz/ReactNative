import React from 'react';

/*function clickMe(argument) {
  alert('you click me !'); 
}*/
export default function App(){
  return (
    <div>
    <h1>custom button component</h1>
      <button varient="primary">         
      click Me 
      </button> {' '}
      <button varient='secondary'>
      subscribe
      </button>
    </div>
      );
}