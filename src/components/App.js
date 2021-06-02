import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './Header';
import AddTodo from './AddTodo';
import TodoList from './TodoList';


function App() {

  
  const [list, setList] = useState([]);

  //handle the todoform from the AddTodo
  const addTodoHandler = (listed) =>{
    console.log(listed);
    setList([...list, listed]);

  }

  return (
    <div>

     <Header />
     <AddTodo addTodoHandler={addTodoHandler}/>
     <TodoList lists ={list}/>
      
    </div>
  );
}

export default App;
