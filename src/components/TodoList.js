import React, { Component } from 'react'
import TodoItem from './TodoItem.js'
import './TodoList.css'


class TodoList extends Component{

	constructor(props){
		super(props);
		this.state={
			todoList:[
				{
					name: "buy milk",
					id: 1234567,
					completed: false
				}
			],
			todo: ''
		}
	}

	handleChange = (e) =>{
		this.setState({
			todo: e.target.value
		})
	}

	handleClick = (e) =>{
		const { todoList, todo } = this.state;
		let temp = [...todoList];
		let todoTask = {
			name: todo,
			completed: false,
			id: Date.now()
		}
		temp.push(todoTask);
		this.setState({
			todoList: [...temp],
			todo: ''
		})
	}

	handleComplete = (index) =>{
		const { todoList } = this.state;
		let temp = [...todoList];
		temp.map((todo)=>{
			if (todo.id === index) {
				todo.completed = !todo.completed;
			}
		})
		this.setState({
			todoList: [...temp]
		})
	}

	handleDelete = (index) =>{
		const { todoList } = this.state;
		let temp = [...todoList];
		alert('Sure To Delete task')
		temp = temp.filter((todo)=> todo.id !== index)
		this.setState({
			todoList: [...temp]
		})
	}

	handleClearAll = () =>{
		this.setState({
			todoList: []
		})
	}

	render(){
		const { todo, todoList } = this.state;

		return (
			<div className='container'>
				<div id='todo'>
					<div className='header'>
						<h2>To-do list</h2>
						<div>
							<input 
								type="text" 
								value={todo} 
								onChange={this.handleChange} 
								className={`inputBox`}
								placeholder="Add Task"
							/>
							<button 
								onClick={this.handleClick}
								disabled={!todo}
								className={`addBtn`}
							>
								Add Todo
							</button>
							<button 
								onClick={this.handleClearAll}
								disabled={!todoList.length>0}
								className={`addBtn`}
							>
								Clear All
							</button>
							<br />
						</div>
					</div>
					<TodoItem 
						todoList={todoList}
						handleComplete={this.handleComplete}
						handleDelete={this.handleDelete}
					/>
				</div>
			</div>
		)
	}
}

export default TodoList;