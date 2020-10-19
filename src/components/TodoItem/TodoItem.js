import React, { Component } from 'react';
import './TodoItem.css'

class TodoItem extends Component {

	constructor(props) {
		super(props)
		this.source = ''
	}
	
	onDragStart = (e) => {
		e.dataTransfer.setData('id', e.target.innerHTML)
		this.source = e.target;
		// console.log(this.source)
		e.dataTransfer.effectAllowed = "move";
	}

	onDragOver = (e) => {
		e.preventDefault();
		e.dataTransfer.dropEffect = "move";
	}

	onDrop = (e) => {
		// let id = e.dataTransfer.getData("id");
		this.source.innerHTML = e.target.innerHTML;
		// console.log(id)
		e.target.innerHTML = e.dataTransfer.getData("id");
	}

	addTask = (todo, index) => {
		const {
			handleComplete,
			handleDelete, handleEdit,
			handleCheckBoxes,
		} = this.props;

		return (
			<div 
				className={`listItems`}
				key={todo.id}
				// draggable="true" 
				// onDragOver={(e) => this.onDragOver(e)}
				// onDrop={(e) => this.onDrop(e)}
				// onDragStart={(e)=> this.onDragStart(e)}
			>
				<li 
					key={todo.id}
					className={`listItems ${todo.completed ? 'completed': ''}`}
					draggable="true" 
					// onDragOver={(e) => this.onDragOver(e)}
					onDrop={(e) => this.onDrop(e)}
					onDragStart={(e)=> this.onDragStart(e)}
				>
					<span
						className = {`dragIcon`}
					>
						&#8942;
					</span>
					<input 
						type="checkbox" 
						className={`checkBoxes`}
						onChange={() => handleCheckBoxes(todo.id)}
					/>
					<input
						value={todo.name}
						onChange={(e)=> handleEdit(e.target.value, todo.id)}
						className={`task`}
					/>
					<div className={`icons`}>
						<button
							className={`completeBtn`}
							onClick={()=>handleComplete(todo.id)}
							id={todo.id}
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
				<ul className={`list`}
					onDragOver={(e) => this.onDragOver(e)}
					// onDrop={(e) => this.onDrop(e)}
				>
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