import React from 'react';
import TodoList from './components/TodoList/TodoList.js'
import Board from './components/Board.js'
import Card from './components/Card.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList />

      {/* <main
        className="flexbox"
      >
        <Board
          id="board-1"
          className="board"
        >
          <Card
            id="card-1"
            className="card"
            draggable
          >
            <p>Card 1</p>
          </Card>
          <Card
            id="card-2"
            className="card"
            draggable
          >
            <p>Card 2</p>
          </Card>
          <Card
            id="card-3"
            className="card"
            draggable
          >
            <p>Card 3</p>
          </Card>
          <Card
            id="card-4"
            className="card"
            draggable
          >
            <p>Card 4</p>
          </Card>
        </Board>
      </main> */}
    </div>
  );
}

export default App;
