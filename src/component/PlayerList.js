import React from "react";
import { players } from "../players";
import Player from "../component/Player";

function PlayerList() {
  return (
    <div className="players">
      {players.map((playerData) => (
        <Player key={playerData.id} {...playerData} />
      ))}
    </div>
  );
}

export default PlayerList;
