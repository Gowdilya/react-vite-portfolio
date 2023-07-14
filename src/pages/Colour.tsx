import RGBAlchemy from "../components/ColourAlchemy/RGBAlchemy";
import { GameData } from "../components/ColourAlchemy/gamaData";

function ColourGamePage() {
  var gameData: GameData = {
    userId: "userID123",
    width: 12,
    height: 12,
    maxMoves: 15,
    target: [240, 248, 255],
  };
  return (
    <div className="container mx-auto">
      <p className="ml-6 mt-6">
        {" "}
        Welcome to the Colour Alchemy Game demo, try and get to the target
        colour by clicking the circles in the first 3 moves, and then dragging
        and dropping the square tiles onto the circles to create various shades
        of colour.
      </p>
      <p className="ml-6 mt-6">
        The full complete version of this Game can be found in my repository at{" "}
      </p>
      <a className="ml-6 mt-6" href="https://github.com/Gowdilya/alchemy">
        https://github.com/Gowdilya/alchemy
      </a>
      <p className="ml-6 mt-6">
        The Github includes a server to load, reload and replay the game with
        more dynamic game data. The version here is more static, and only for
        demo purpose to show functionality.
      </p>
      <RGBAlchemy
        data={gameData}
        handlePlayAgain={() => {
          alert("feature not available");
        }}
      />
    </div>
  );
}

export default ColourGamePage;
