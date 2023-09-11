import { useTicTac } from "../context/TicTacContext"

function TicTacEndGame() {
    const {winnerPlayer , onReset} = useTicTac()
    return (
        <div className="winner-container">
        <h2>{winnerPlayer} Wins</h2>
        <button onClick={onReset}>Reset</button>
      </div>
    )
}

export default TicTacEndGame
