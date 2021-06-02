import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const TodoDetail = (props) => {
  const classes = useStyles();
  //   const {title} = props.location.state.list;
  const {title} = props.location.state.list;

  return (
    <div>
      <div style={{ marginTop: "120px", marginLeft: "100px" }}>
        <h2>{title}</h2>
      </div>

      <div>
        <Button variant="contained" color="primary">
          Back to Todo List
        </Button>
      </div>
    </div>
  );
};

export default TodoDetail;
