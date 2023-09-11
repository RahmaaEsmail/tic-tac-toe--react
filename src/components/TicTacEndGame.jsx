import { useTicTac } from "../context/TicTacContext"

// eslint-disable-next-line react/prop-types
function TicTacEndGame({children}) {
    const {  onReset} = useTicTac()
    return (
        <div className="winner-container">
        {children}
        <button onClick={onReset}>Reset</button>
      </div>
    )
}

export default TicTacEndGame
