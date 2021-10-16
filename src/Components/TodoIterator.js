import React from "react";

import SingleTodo from "./SingleTodo";

const TodoIterator = ({ todoList }) => {
  console.log(todoList);
  return todoList.map((todo) => {
    {
      console.log(todo);
    }
    return <SingleTodo key={todo.id} todo={todo} />;
  });
};

export default TodoIterator;
