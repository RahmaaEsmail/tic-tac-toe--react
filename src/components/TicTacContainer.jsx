import { useTicTac } from "../context/TicTacContext";
import TicTacEndGame from "./TicTacEndGame";
import TicTacBoard from "./TicTacBoard";

function TicTacContainer() {
  const {isFinished , isEqual , winnerPlayer} = useTicTac();
  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>

      {isFinished && (
        <TicTacEndGame>
          <h2>{winnerPlayer} Wins!</h2>
        </TicTacEndGame>
      )}
      {isEqual && (
        <TicTacEndGame>
          <h2>The players are draw!</h2>
        </TicTacEndGame>
      )}
      {!isFinished && !isEqual && (
        <>
          <TicTacBoard />

          <div className="players">
            <span>Player 1 : X</span>
            <span>Player 2 : O</span>
          </div>
        </>
      )}
    </div>
  );
}

export default TicTacContainer
