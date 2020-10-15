import React, { Component } from 'react';
import './TodoItem.css'

class TodoItem extends Component {

	addTask = (todo, index) => {
		const {
			handleComplete,
			handleDelete, handleEdit,
			handleCheckBoxes,
		} = this.props;

		return (
			<div 
				className={`listItems`}
				key={index}
				id={index}
			>
				<li 
					key={todo.id}
					className={`listItems ${todo.completed ? 'completed': ''}`}
				>
					<input 
						type="checkbox" 
						className={`checkBoxes`}
						onChange={() => handleCheckBoxes(index)}
					/>
						<input
							value={todo.name}
							onChange={(e)=> handleEdit(e.target.value, todo.id)}
						/>
					<div className={`icons`}>
						<button
							className={`completeBtn`}
							onClick={()=>handleComplete(todo.id)}
						>
							&#10004;
						</button>
						{/* <button
							className={`editBtn`}
							onClick={() => handleEdit(todo)}
						>
							&#9998;
						</button> */}
						<button
							className={`deleteBtn`}
							onClick={() => handleDelete(todo.id)}
						>
							&#128465;
						</button>
					</div>
				</li>
			</div>
		)
	}

	render() {

		const { todoList } = this.props;

		if (todoList.length > 0) {
			return (
				<ul className={`list`}>
					{
						todoList.map((todo, index)=> this.addTask(todo, index))
					}
				</ul>
			)
		} else {
			return <div className={`empty`}>Add List Items.. !!!</div>
		}
	}
}

export default TodoItem;