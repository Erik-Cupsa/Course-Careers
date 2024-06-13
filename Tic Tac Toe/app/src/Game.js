import React, { useState } from "react";
import Board from "./Board";

// Main Game component
export default function Game() {
    // State to keep track of game history
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0); // State to keep track of current step in the game
    const [xIsNext, setXIsNext] = useState(true); // State to keep track of which player's turn it is

    const current = history[stepNumber]; // Get the current board state
    const winner = calculateWinner(current); // Determine if there's a winner

    // Function to handle a square click
    function handleClick(i) {
        const historyCopy = history.slice(0, stepNumber + 1); // Copy the game history up to the current step
        const current = historyCopy[historyCopy.length - 1];
        const squares = current.slice(); // Copy the current board state

        // Ignore click if there's a winner or the square is already filled
        if (winner || squares[i]) return;

        // Update the square with the current player's symbol
        squares[i] = xIsNext ? "X" : "O";
        setHistory(historyCopy.concat([squares])); // Update the history with the new board state
        setStepNumber(historyCopy.length); // Update the current step number
        setXIsNext(!xIsNext); // Switch to the other player
    }

    // Function to jump to a specific step in the game history
    function jumpTo(step) {
        setStepNumber(step); // Set the current step number
        setXIsNext(step % 2 === 0); // Set the current player based on the step number
    }

    // Create a list of moves to display
    const moves = history.map((step, move) => {
        const desc = move ? `Go to move #${move}` : `Go to game start`;
        return (
            <li key={move}>
                <button className="text-blue-500" onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    // Determine the game status message
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next player: ${xIsNext ? "X" : "O"}`;
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={current} onClick={(i) => handleClick(i)} />
            </div>
            <div className="game-info">
                <div className="mb-2">{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

// Function to determine the winner
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
