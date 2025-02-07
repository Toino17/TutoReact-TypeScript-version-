import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/App.css'
import Game from "./pages/ticTacToe";
import Home from "./pages/home";
import Count from "./pages/count"
import Navbar from "./comp/navbar";
import Task from "./pages/task";

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/tictactoe" element={<Game />}/>
          <Route path="/count" element={<Count />}/>
          <Route path="/task" element={<Task />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
