import { MouseEventHandler, useState } from "react";
import '../assets/css/ticTacToe.css';


interface SquareProps{
    value: string | null;
    onSquareClick: MouseEventHandler<HTMLButtonElement>
}

function Square({value, onSquareClick}: SquareProps){

    return <button className="square" onClick={onSquareClick}>
                {value}
            </button>;

}

interface propsBoard {
    xIsNext: boolean;
    squares: Array<string | null>;
    onPlay: (nextSquares:Array <string | null>) => void;
}

function Board({squares, xIsNext, onPlay}: propsBoard) {

    function handleClick(i: number) {

        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        const nextSquares = squares.slice();

        if (xIsNext){
            nextSquares[i] = "X";
        }
        else{
            nextSquares[i] = "O";
        }

        onPlay(nextSquares);

    }

    let winner: (null | string) = calculateWinner(squares);
    let status: string;

    if (winner) {
        status = winner + " à gagné la partie!"
    } 
    else{
        status = (xIsNext ? "X" : "O") + " c'est à toi de jouer."
    }


    return (
        <>
        <div className="board">
            <div className="board-row">
                <Square value ={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value ={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value ={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value ={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value ={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value ={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value ={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value ={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value ={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </div>
        <div className="borderDetails">
            <p className="message">{status}</p>
        </div>
        
        </>
    );
}

function calculateWinner(squares: Array<string | null>){
    const table: Array<Array<number>> = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
    ];

    for (let i = 0; i < table.length; i++) {

        const [a,b,c] = table[i];

        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a];
        }
        
    }

    return null;

}

export default function Game(){

    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove %2 === 0;

    function handlePlay(nextSquares: Array<string | null>){

        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length -1);

    }

    function jumpTo(nextMove: number) {
        
        setCurrentMove(nextMove);
        
    }

    const moves = history.map((squares, move) =>{
        let description;
        if (move>0){
            description = 'Aller au coup ' + move;
        }
        else{
            description = 'Revenir au début';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })

    return (
        <>
        <div className="game">
            <div className="game-board">
                <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay}/>
            </div>
            <div className="game-info">
                <ol className="olCoup">{moves}</ol>
            </div>
        </div>
        </>
    );
}