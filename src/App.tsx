import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/App.css'
import Game from "./pages/ticTacToe";
import Home from "./pages/home";
import Count from "./pages/count"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/tictactoe" element={<Game />}/>
          <Route path="/count" element={<Count />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
