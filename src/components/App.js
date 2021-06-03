import React, { useState, useEffect } from "react";
import "./App.css";
import { uuid } from "uuidv4";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodoDetail from "./TodoDetail";

import api from "../api/todo";
import axios from "axios";
import EditTodo from "./EditTodo";

function App() {
  const LOCAL_STORAGE_KEY = "lists";
  const [list, setList] = useState([]);

  //function to retrieve todo items from the json placeholder
  const retrieveLists = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return response.data;
  };

  //handle the todoform from the AddTodo
  const addTodoHandler = async (listed) => {
    console.log(listed);
    const request = {
      id: uuid(),
      ...listed,
    };
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      request
    );
    setList([...list, response.data]);
  };

  //function for editing of the item fetched from the placeholder
  const updateTodoHandler = async (listed) => {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${listed.id}`,
      listed
    );
    const { id, title } = response.data;
    setList(
      list.map((listed) => {
        return listed.id === id ? { ...response.data } : listed;
      })
    );
  };

  //function for removal of item from the fetched data
  const removeTodoHandler = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const newTodoList = list.filter((listed) => {
      return listed.id !== id;
    });

    setList(newTodoList);
  };

  useEffect(() => {
    // const retrieveLists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retrieveLists) setList(retrieveLists);
    const getAllItems = async () => {
      const allItems = await retrieveLists();
      if (allItems) setList(allItems);
    };
    getAllItems();
  }, []);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
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
          <Route
            path="/edit"
            render={(props) => (
              <EditTodo {...props} updateTodoHandler={updateTodoHandler} />
            )}
          />
          <Route path="/listed/:id" component={TodoDetail} />
        </Switch>

        {/* <AddTodo addTodoHandler={addTodoHandler} />
        <TodoList lists={list} getListId={removeTodoHandler} /> */}
      </Router>
    </div>
  );
}

export default App;
