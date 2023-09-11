import { useTicTac } from "../context/TicTacContext";
import TicTacEndGame from "./TicTacEndGame";
import TicTacBoard from "./TicTacBoard";

function TicTacContainer() {
  const {isFinished} = useTicTac();
  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      {isFinished && <TicTacEndGame/>}
      <TicTacBoard/>
    </div>
  );
}

export default TicTacContainer
