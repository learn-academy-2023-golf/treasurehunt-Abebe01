import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))
  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))
  const [guessesRemaining, setGuessesRemaining] = useState(5); 


  console.log("treasure:", treasureLocation)
  console.log("bomb:", bombLocation)

  const handleGamePlay = (index) => {
    // alert(index)
    let updatedBoard = [...board]
    if (treasureLocation === index) {
      updatedBoard[index] = "🥇"
      setBoard(updatedBoard)
    } else if (bombLocation === index) {
      updatedBoard[index] = "💥"
      setBoard(updatedBoard)
    } else {
      updatedBoard[index] = "🌴"
      setGuessesRemaining(guessesRemaining - 1);
      setBoard(updatedBoard)
    }
  }

  const handleResetGame = () => {
    // Reset the game by generating new random positions for the treasure and bomb
    setTreasureLocation(Math.floor(Math.random() * board.length));
    setBombLocation(Math.floor(Math.random() * board.length));
    setBoard(Array(board.length).fill("?"));
  }

  return (
    <>
      <h1>☠️One Piece Treasure Hunt Game☠️</h1>
      <h2>Grab your Crew & Find the One Piece!🏴‍☠️</h2>
      <div className="gameboard"> 
        {board.map((value, index) => {
          return (
            <Square 
              value={value}
              key={index}
              index={index}
              handleGamePlay={handleGamePlay}
            />
          );
        })} 
      </div>
      <div> 
        <button className="reset" onClick={handleResetGame}>Play Again</button>
        </div>
      </>
      
    
  )
}

export default App
