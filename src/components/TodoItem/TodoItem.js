import React, { Component } from 'react';
import './TodoItem.css'

class TodoItem extends Component {

	addTask = (todo) => {
		const { handleComplete, handleDelete, handleEdit } = this.props;

		return (
			<div 
				className={`listItems`}
				key={todo.id}
			>
				<li 
					key={todo.id}
					className={`listItems ${todo.completed ? 'completed': ''}`}
				>
					<span>{todo.name}</span>
					<div className={`icons`}>
						<button
							className={`completeBtn`}
							onClick={()=>handleComplete(todo.id)}
						>
							&#10004;
						</button>
						<button
							className={`editBtn`}
							onClick={() => handleEdit(todo)}
						>
							&#9998;
						</button>
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
						todoList.map((todo)=> this.addTask(todo))
					}
				</ul>
			)
		} else {
			return <div className={`empty`}>Add List Items.. !!!</div>
		}
	}
}

export default TodoItem;