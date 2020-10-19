import React from 'react'

function Board(props) {

  const drop = (e) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('cardId');
    console.log(cardId);
    const card = document.getElementById(cardId);
    card.style.display = 'block'

    e.target.appendChild(card)
    console.log(card);
  }

  const dragOver = (e) => {
    e.preventDefault()
  }



  return (
    <div
      id={props.id}
      onDrop={drop}
      onDragOver={dragOver}
      className={props.className}
    >
      {props.children}
    </div>
  )
}

export default Board
