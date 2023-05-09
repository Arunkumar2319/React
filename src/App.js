import React, { createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';

export const todoContext = createContext();
const data  = {name: "AK"}
const App = () => {
	return (
		<todoContext.Provider value={{data}}>

		<div className='container bg-white p-4 mt-5'>
			<h1>My Todo List</h1>
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItems />
		</div>
		</todoContext.Provider>
	);
};

export default App;
