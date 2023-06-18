import "./Player.css"
import Card from "react-bootstrap/Card";

function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
return (
    <Card className="player-card">
    <Card.Img variant="top" src={imageUrl} className="player-image" />
    <Card.Body>
        <Card.Title className="player-name">{name}</Card.Title>
        <Card.Text className="player-text">
        Team: {team}
        <br />
        Nationality: {nationality}
        <br />
        Jersey Number: {jerseyNumber}
        <br />
        Age: {age}
        </Card.Text>
    </Card.Body>
    </Card>
);
}

export default Player;
