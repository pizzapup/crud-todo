/* eslint-disable no-unused-vars */
import React from "react";
import firebase from "../../utilities/firebase";
import styles from "./toDo.css";
import { Button, Stack, Form } from "react-bootstrap";
function ToDo({ todo }) {
  const completeToDo = () => {
    const todoRef = firebase.database().ref("crud-todo").child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
  };
  const deleteToDo = () => {
    const todoRef = firebase.database().ref("crud-todo").child(todo.id);
    todoRef.remove();
  };
  return (
    <div className="to-do-holder">
      <h2 className={todo.complete ? "complete" : "incomplete"}>
        {todo.title}
      </h2>
      <Stack direction="horizontal" gap={3}>
        <Button
          className={todo.complete ? "" : "d-none"}
          onClick={completeToDo}
          variant="success"
        >
          Complete
        </Button>
        <Button
          variant="danger"
          className={todo.complete ? "d-none" : ""}
          onClick={completeToDo}
        >
          Incomplete
        </Button>
        <div className="vr" />
        <Button variant="outline-danger" onClick={deleteToDo}>
          Delete
        </Button>
      </Stack>
    </div>
  );
}
export default ToDo;
