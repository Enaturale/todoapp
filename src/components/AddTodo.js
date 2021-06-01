import React from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

import "./App.css";
import { Button, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 400,
    },
  },

  formControl: {
    margin: theme.spacing(1),
    width: 400,
  },

  buttonStyle:{
      width: 100,
      marginLeft: 300,
      fontWeight: "bold",
      fontSize: 18,
  },
  title:{
      margin: theme.spacing(1),
  }
}));

const AddTodo = () => {
  const classes = useStyles();

  return (
    <div className="wrapper">
      <h2 className={classes.title}> Add Task/Todo</h2>
      <form className={classes.root}>
        <div>
          <TextField label=" Title" variant="outlined" />
        </div>

        <div>
          {/* <TextField  label =" Completed" variant= "outlined"/> */}
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel >Completed</InputLabel>
            <Select native label="Completed">
              <option aria-label="None" value="" />
              <option >True</option>
              <option >False</option>
            
            </Select>
          </FormControl>
        </div>

        <Button variant="contained" color="primary"  className ={classes.buttonStyle}>
          Add
        </Button>
      </form>
    </div>
  );
};
export default AddTodo;
