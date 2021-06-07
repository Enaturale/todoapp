import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TodoCard from "./TodoCard";
import { Button } from "@material-ui/core";
import { Link} from "react-router-dom";
import Box from '@material-ui/core/Box';
import { borders } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  titleList: {
    marginLeft: 300,
    // textAlign: 'center',
    marginTop: 30,
  },
  listeditems: {
    width: 300,
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
    alert("Item deleted");
  };

 
//slice(0, 10).
  const renderTodoList = props.lists.map((list) => {
    return (
      <TodoCard list={list} clickHandler={deleteTodoHandler} key={list.id} />
    );
  });

  return (
    <div className={classes.titleList}>

      <h2 style={{ marginTop: "90px", fontSize:"3rem", fontWeight:'bold'}}>ToDO List</h2>
      <Link to="/add" style ={{textDecoration:'none'}}>
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: "590px", fontSize:'1.5rem', fontWeight: 'bold', marginBottom: '20px'}}
      >
        Add Task
      </Button>
      </Link>

      <Box width="800px" backgroundColor ="red">
      {renderTodoList}
      </Box>
    </div>
  );
};

export default TodoList;
