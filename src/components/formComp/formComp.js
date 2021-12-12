/* eslint-disable no-unused-vars */
//
import React, { useState } from "react";
import firebase from "../../utilities/firebase";

import {
  Form,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  FloatingLabel,
} from "react-bootstrap";
import styles from "./formComp.css";
function FormComp() {
  const [title, setTitle] = useState("");
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const createTodo = () => {
    const todoRef = firebase.database().ref("crud-todo");
    const todo = {
      title,
      complete: false,
    };
    todoRef.push(todo);
  };

  return (
    <div className="formComp-holder">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Add New Item"
          aria-label="Add New Item"
          aria-describedby="basic-addon2"
          onChange={handleOnChange}
          value={title}
        />
        <Button variant="primary" id="button-addon2" onClick={createTodo}>
          Add to list
        </Button>
      </InputGroup>
    </div>
  );
}

export default FormComp;
