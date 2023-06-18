
import Player from "./Player";
import Players from "./Players";

function PlayersList() {
return (
    <div className="players-list">
    {Players.map((player, index) => (
        <Player key={index} {...player} />
    ))}
    </div>
);
}

export default PlayersList;
