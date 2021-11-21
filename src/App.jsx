import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import BoardList from './components/board/board-list'
import Board from './components/board/board'
import CreateBoard from './components/board/create-board'

function App() {
  const [boards, setBoard] = useState([])


  function createBoard(){

      let board = {
        id: 1,
        name: "",
        lists: []
      }
      setBoard(boards => [...boards, board])
    }

console.log(boards)

  return (
    <div className="App">
      <header className="App-header">
        <CreateBoard createBoard={createBoard} />
        <div className={`fixed top-0 p-4 w-full grid grid-cols-1 gap-4 sm:grid-cols-${boards.length ?? 1}`}>
        {
          boards.length > 0 && boards.map((board, i) => {
            return <Board key={i} name={board.name} />
          })}
          </div>
      </header>
    </div>
  )
}

export default App
