import React, { Component } from 'react'
import TodoItem from '../TodoItem/TodoItem.js'
import './TodoList.css'


class TodoList extends Component{

	constructor(props){
		super(props);
		this.selection = [];
		this.state={
			todoList:[
				{
					name: "buy milk",
					id: 123,
					completed: false
				},
				{
					name: "buy food",
					id: 124,
					completed: false
				},
				{
					name: "buy cadbury",
					id: 125,
					completed: false
				},
				{
					name: "buy peanut",
					id: 126,
					completed: false
				},
			],
			todo: '',
		}
	}

	handleChange = (e) => {
		this.setState({
			todo: e.target.value
		})
	}

	handleClick = () =>{
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

	handleComplete = (index) => {
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

	handleClearAll = () => {
		let result = window.confirm('Sure to Delete All Tasks ?');
		result && (
			this.setState({
				todoList: []
			})
		)
	}

	handleEdit = (task, key) => {
		const { todoList } = this.state;
		let temp = [...todoList]
		temp.map((todo) => {
			if (todo.id === key && task !== '') {
				todo.name= task
			}
		})

		this.setState({
			todoList: temp
		})
	}

	completeAllTodo = () =>{
		const { todoList } = this.state;
		let temp = [...todoList]
		temp.map((todo) => {
			todo.completed = true
		})
		this.setState({
			todoList: temp
		})
	}

	handleCheckBoxes = (checkBoxIndex) => {
		let result = this.selection.indexOf(checkBoxIndex);
		(result === -1) &&
			(this.selection.push(checkBoxIndex)) ||
				this.selection.splice(result, 1)

		console.log(this.selection)
		// if (this.selection.indexOf(checkBoxIndex) === -1) {
		// 	this.selection.unshift(checkBoxIndex)
		// } else {
		// 	const index = this.selection.indexOf(checkBoxIndex);
		// 	if (index > -1) {
		// 		this.selection.splice(index, 1);
		// 	}
		// }
	}

	completeSelectedTodo = () => {
		const { selection, state: { todoList } } = this;

		let temp = [...todoList];
		temp = temp.map((ele, index) => {
			selection.indexOf(index) !== -1 && (
				ele.completed = true
			)
			return ele
		})

		this.setState({
			todoList: temp
		})
		// this.selection = []
	}

	deleteSelectedTodo = () => {
		const { state: { todoList }, selection } = this;
		let temp = [...todoList];

		temp = temp.filter((todo, index) => {
			 return selection.indexOf(index) === -1
		})

		this.setState({
			todoList: temp
		})
		this.selection = [];
	}

	updateTodo = () => {
		const { todoList, todo, editingName } = this.state;
		let temp = [...todoList];

		temp.map((newtodo) => {
			if (newtodo.id === editingName.id) {
				newtodo.name = todo
			}
		})

		this.setState({
			todoList: temp,
			todo: ''
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
								onClick={this.completeSelectedTodo}
								// disabled={!this.selection.length>0}
								className={`completeSelectedBtn`}
								title='Complete Selected'
							>
								{/* &#9745;&#65039; */}
								Complete Selected
							</button>
							{/* {console.log(this.selection.length> 0)} */}
							<button 
								onClick={this.deleteSelectedTodo}
								// disabled={!this.selection.length>0}
								className={`completeSelectedBtn`}
								title="Delete Selected"
							>
								{/* &#9745;&#65039;&#128465; */}
								Delete Selected
							</button>
							<button 
								onClick={this.completeAllTodo}
								disabled={!todoList.length>0}
								className={`completeAllBtn`}
								title="Mark All Complete"
							>
								&#10004;
							</button>
							<button 
								onClick={this.handleClearAll}
								disabled={!todoList.length>0}
								className={`deleteAllBtn`}
								title="Delete All Task"
							>
								&#128465;
							</button>
							<br />
						</div>
					</div>
					<TodoItem 
						todoList={todoList}
						handleComplete={this.handleComplete}
						handleDelete={this.handleDelete}
						handleEdit={this.handleEdit}
						handleCheckBoxes={this.handleCheckBoxes}
					/>
				</div>
			</div>
		)
	}
}

export default TodoList;