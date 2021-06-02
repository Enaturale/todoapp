import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    link:{
        textDecoration:'none', 
        fontSize: theme.spacing(4),
        fontWeight:'bold',
        marginLeft: '300px'

    }
}));

const TodoDetail = (props) => {
  const classes = useStyles();
  //   const {title} = props.location.state.list;
  const { title } = props.location.state.list;

  return (
    <div>
      <div style={{ marginTop: "120px", marginLeft: "100px" }}>
        <h2>{title}</h2>
      </div>

      <div>
        <Link to="/" className={classes.link}>
          <Button variant="contained" color="primary">
            Back to Todo List
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TodoDetail;
