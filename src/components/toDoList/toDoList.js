/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import firebase from "../../utilities/firebase";
import ToDo from "../toDo/toDo";
import styles from "./toDoList.css";
function ToDoList() {
  const [todoList, setTodoList] = useState();
  useEffect(() => {
    const todoRef = firebase.database().ref("crud-todo");
    todoRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      setTodoList(todoList);
    });
  }, []);
  return (
    <div className="todo-list-holder">
      {todoList
        ? todoList.map((todo, index) => <ToDo todo={todo} key={index} />)
        : ""}
    </div>
  );
}
export default ToDoList;
