import { useTicTac } from "../context/TicTacContext"
import TicTacSquare from "./TicTacSquare"

function TicTacBoard() {
    const {emptyArray} = useTicTac()
    return (
        <div className="box-container">
        {emptyArray.map((box, i) => (
          <TicTacSquare box={box} index ={i} key={i}/>
        ))}
      </div>
    )
}

export default TicTacBoard
