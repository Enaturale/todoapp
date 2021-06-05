import React, { useState } from "react";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import getout from "../images/delete.png";

import todo from "../images/appicon.jpg";
import edit from "../images/editicon.png";



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
    width: 730,
 
    marginBottom: 20,
    // paddingTop: 20,
    marginTop:10,
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
        <Box display="flex" border ={1} borderColor ="gray" height='90px' borderRadius='4px'>
          <Box marginTop='20px' display ="flex" marginLeft="4px">
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
              <img src={edit} className={classes.image} alt="todo Icon" style ={{ marginLeft: "37rem", color: "blue"}}   />
            {/* <Icon
              style={{ marginLeft: "37rem", color: "blue" }}
              
            >
              edit
            </Icon> */}
            </Link>

            {/* <DeleteForeverOutlinedIcon
              style={{ marginLeft: "1rem", color: "#D21404" }}
              onClick={() => props.clickHandler(id)}
            /> */}
            <img src={getout} className={classes.image} alt="todo Icon" onClick={() => props.clickHandler(id)} />
          </div>
          </Box>
        </Box>
      </div>

      {/* <div style={{ width: "800px" }}>
        <Divider />
        <Divider />
        <Divider />
      </div> */}
    </div>
  );
};

export default TodoCard;
