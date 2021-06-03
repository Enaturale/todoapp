import React, { useState } from "react";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

import todo from "../images/list.png";
import { Box, Checkbox, FormControlLabel } from "@material-ui/core";

import { Link } from "react-router-dom";
import { Check } from "@material-ui/icons";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  titleList: {
    marginLeft: 250,
    marginTop: 30,
  },
  listeditems: {
    width: 700,
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
            {/* 
            <FormControlLabel
              value="completed"
              name="completed"
              control={<Checkbox color="primary" />}
              label="Completed"
              labelPlacement="start"
              checked='true'
              
            /> */}

            {/* {completed} */}
            
            <Link
              to={{
                pathname: `/edit`,
                state: { list: props.list },
              }}
              style={{ textDecoration: "none", color: "black" }}
            >
            <Icon
              style={{ marginLeft: "23rem", color: "blue" }}
              
            >
              edit
            </Icon>
            </Link>

            <DeleteForeverOutlinedIcon
              style={{ marginLeft: "2rem", color: "#D21404" }}
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
