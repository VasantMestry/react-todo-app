import React, { Component } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd'
import './TodoItem.css'

class TodoItem extends Component {

	addTask = (todo, index) => {
		const {
			handleComplete,
			handleDelete, handleEdit,
			handleCheckBoxes,
		} = this.props;

		return (
			<Draggable
				key={todo.id}
				draggableId={todo.id+''}
				index={index}
			>
				{(provided) =>(
					<div 
						className={`listItems`}
						key={todo.id}
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
					>
						<li 
							key={todo.id}
							className={`listItems ${todo.completed ? 'completed': ''}`}
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
								<button
									className={`deleteBtn`}
									onClick={() => handleDelete(todo.id)}
								>
									&#128465;
								</button>
							</div>
						</li>
					</div>
				)}
			</Draggable>
		)
	}

	render() {

		const { todoList } = this.props;

		if (todoList.length > 0) {
			return (
				<Droppable
					droppableId="droppable"
				>
					{(provided)=>(
						<ul 
							className={`list`}
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{
								todoList.map((todo, index)=> this.addTask(todo, index))
							}
							{provided.placeholder}
						</ul>
					)}
				</Droppable>
			)
		} else {
			return <div className={`empty`}>Add List Items.. !!!</div>
		}
	}
}

export default TodoItem;