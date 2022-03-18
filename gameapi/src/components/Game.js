import React from 'react';
import './Game.css'

const Game = (props) => {
    return (
        <div>
          <h3>{props.name}</h3>           
          <img class='image' alt='' src={props.picgameurl} />
          <h4>{props.rating}</h4>
          <button> button </button>
        </div>
    );
};

export default Game;