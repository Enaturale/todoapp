import React from "react";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

import todo from "../images/list.png";
import { Box } from "@material-ui/core";

import { Link } from "react-router-dom";

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
  image: {
    width: 25,
    height: 25,
    marginRight: 8,
  },
}));

const TodoCard = (props) => {
  const classes = useStyles();
  const { id, title, completed } = props.list;
  return (
    <div>
      <div className={classes.listeditems}>
        <Box display="flex">
          <img src={todo} className={classes.image} alt="todo Icon" />

          <div style={{ fontWeight: "bold" }}>
            <Link
              to={{
                pathname: `/listed/${id}`,
                state: { list: props.list },
              }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div>{title}</div>
            </Link>

            {/* {completed} */}
            <DeleteForeverOutlinedIcon
              style={{ marginLeft: "23rem", color: "#D21404" }}
              onClick={() => props.clickHandler(id)}
            />
          </div>
        </Box>
      </div>

      <div style={{ width: "600px" }}>
        <Divider />
        <Divider />
        <Divider />
      </div>
    </div>
  );
};

export default TodoCard;
