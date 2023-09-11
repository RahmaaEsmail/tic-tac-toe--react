import { useTicTac } from "../context/TicTacContext"

// eslint-disable-next-line react/prop-types
function TicTacSquare({box,index}) {
    const {onAddText} = useTicTac()

    return (
        <div  className={`box`} onClick={() => onAddText(index)}>
        {box}
      </div>
    )
}

export default TicTacSquare
