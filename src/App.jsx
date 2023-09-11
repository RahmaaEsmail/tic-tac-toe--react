import TicTacContainer from "./components/TicTacContainer";
import { TicTacProvider } from "./context/TicTacContext";

function App() {
  return (
    <TicTacProvider>
      <TicTacContainer/>
    </TicTacProvider>
  )
}

export default App;