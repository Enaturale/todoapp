import React from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";

import "./App.css";
import { Button } from "@material-ui/core";

class AddTodo extends React.Component {
  state = {
    title: " ",
    completed: " ",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.title === " ") {
      alert("All fields are mandatory");
      return;
    }
    this.props.addTodoHandler(this.state);
    this.setState({ title: "" });
    this.props.history.push("/");
    alert("To do item Added");
  };

 

  render() {
    return (
      <div className="wrapper">
        <h2 className="title"> Add Task/Todo</h2>
        <form className="form" onSubmit={this.add}>
          <div>
            <TextField
              label=" Title"
              variant="outlined"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
              style={{ width: "600px", marginBottom: "7px" }}
            />            
          </div>

          {/* <div>
          {/* <TextField  label =" Completed" variant= "outlined"/> 
          <FormControl variant="outlined" className="formControl">
            <InputLabel>Completed</InputLabel>
            <Select native label="Completed" onChange={(e) => this.setState({completed: e.target.value})}>
              <option value={this.state.completed} >True</option>
              <option value={this.state.completed}>False</option>
            </Select>
          </FormControl>
        </div> */}

          <Button
            variant="contained"
            color="primary"
            style={{ width: "100px", fontWeight: "bold", marginTop: "10px", fontSize: '20px' }}
            onClick={this.add}
          >
            Add
          </Button>
        </form>
      </div>
    );
  }
}
export default AddTodo;
