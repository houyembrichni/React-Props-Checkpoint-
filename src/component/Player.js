import React from 'react'

function Player(props) {
  return (
    <div className="playersList">
      <div className="playerCard">
        <img src={props.image} alt="player_img" className="player_Image" />
        <div className="playerCard_content">
          <h3 className="playerName">{props.name}</h3>
          <div className="display">
            <img src={props.nationality} className="playerNationality" />
            <img src={props.team} className="playerTeam" />
            <div className="playerJerseyNumber"> {props.jerseyNumber} </div>
            <div className="playerAge"> Age :{props.age}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player