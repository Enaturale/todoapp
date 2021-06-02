import React, { useState, useEffect } from "react";
import "./App.css";
import { uuid } from "uuidv4";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodoDetail from "./TodoDetail";


function App() {
  const LOCAL_STORAGE_KEY = "lists";
  const [list, setList] = useState([]);

  //handle the todoform from the AddTodo
  const addTodoHandler = (listed) => {
    console.log(listed);
    setList([...list, { id: uuid(), ...listed }]);
  };

  const removeTodoHandler = (id) => {
    const newTodoList = list.filter((listed) => {
      return listed.id !== id;
    });

    setList(newTodoList);
  };

  useEffect(() => {
    const retrieveLists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveLists) setList(retrieveLists);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  }, [list]);

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <TodoList {...props} lists={list} getListId={removeTodoHandler} />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddTodo {...props} addTodoHandler={addTodoHandler} />
            )}
          />
          <Route path ="/listed/:id" component={TodoDetail}/> 
        </Switch>

        {/* <AddTodo addTodoHandler={addTodoHandler} />
        <TodoList lists={list} getListId={removeTodoHandler} /> */}
      </Router>
    </div>
  );
}

export default App;
