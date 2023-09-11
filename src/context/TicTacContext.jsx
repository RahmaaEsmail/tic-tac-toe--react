import { createContext , useContext, useState} from "react";
const tictacContext = createContext()

let winnerList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
]

// eslint-disable-next-line react/prop-types
function TicTacProvider({children}) {
    const [emptyArray, setEmptyArray] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlaye] = useState("X");
  const [winnerPlayer, setWinnerPlayer] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [isEqual,setIsEqual] = useState(false)

  function handleAddText(index) {
    if (!emptyArray[index]) {
      emptyArray[index] = currentPlayer;
      setCurrentPlaye((currentPlayer) => (currentPlayer == "X" ? "O" : "X"));
    }
   
    handleLosLoser()    
 
     handleWinner()
  }

  function handleLosLoser() {
    if(!emptyArray.includes(null) && !winGame()) {
      setIsEqual(true)
      setIsFinished(false)
     }
  }

  function handleWinner() {
    if (winGame()) {
      const winner = winGame();
      setWinnerPlayer(emptyArray[winner[0]]);
      setIsFinished(true);
      setIsEqual(false)
  }
  }

  function handleReset() {
    setEmptyArray(Array(9).fill(null));
    setIsFinished(false);
    setIsEqual(false)
    setCurrentPlaye("X")
    setWinnerPlayer("")
  }

  function winGame() {
    for (const item of winnerList) {
      const [a, b, c] = item;
      if (
        emptyArray[a] &&
        emptyArray[a] == emptyArray[b] &&
        emptyArray[a] == emptyArray[c] &&
        emptyArray[c] == emptyArray[b]
      ) {
        return [a, b, c];
      }
    }
    return false;
  }
    return(
        <tictacContext.Provider value={{
            emptyArray,
            winnerPlayer,
            onReset:handleReset,
            onAddText:handleAddText,
            isFinished,
            isEqual
        }}>
            {children}
        </tictacContext.Provider>
    )
}

function useTicTac() {
    const context = useContext(tictacContext);
    return context
}

export {TicTacProvider , useTicTac}