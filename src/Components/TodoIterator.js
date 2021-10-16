import React from "react";

import SingleTodo from "./SingleTodo";

const TodoIterator = ({ todoList }) => {
  return todoList.map((todo) => {
    return <SingleTodo key={todo.id} todo={todo} />;
  });
};

export default TodoIterator;
