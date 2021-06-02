import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TodoCard from "./TodoCard";



const useStyles = makeStyles((theme) => ({
  titleList: {
    marginLeft: 250,
    marginTop: 30,
  },
  listeditems: {
    width: 500,
    marginBottom: 20,
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    fontSize: 20,
    fontFamily: 'Gill Sans, sans-serif'
  },
}));

const TodoList = (props) => {
  const classes = useStyles();

  const renderTodoList = props.lists.map((list) => {
    return (
      <TodoCard list ={list}/>
    );
  });

  return (
    <div className={classes.titleList}>
      <h2> ToDO List</h2>
      {renderTodoList}
    </div>
  );
};

export default TodoList;
