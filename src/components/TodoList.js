import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TodoCard from "./TodoCard";
import { Button } from "@material-ui/core";
import { Link} from "react-router-dom";

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
    fontFamily: "Gill Sans, sans-serif",
  },
}));

const TodoList = (props) => {
  const classes = useStyles();
  

  const deleteTodoHandler = (id) => {
    props.getListId(id);
  };

 
//slice(0, 10).
  const renderTodoList = props.lists.map((list) => {
    return (
      <TodoCard list={list} clickHandler={deleteTodoHandler} key={list.id} />
    );
  });

  return (
    <div className={classes.titleList}>
      <h2 style={{ marginTop: "90px" }}> ToDO List</h2>
      <Link to="/add" style ={{textDecoration:'none'}}>
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: "478px", fontSize:'large', fontWeight: 'bold'}}
      >
        Add Task
      </Button>
      </Link>
      {renderTodoList}
    </div>
  );
};

export default TodoList;
