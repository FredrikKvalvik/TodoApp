import { React, useState } from "react";

import Wrapper from "./Components/Wrapper";
import Header from "./Components/Header";
import Button from "./Components/Button";
import TodoIterator from "./Components/TodoIterator";

import { generateID } from "./helpers/uniqueID.helper";
const App = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  // checkes and saves
  const handleTodoInput = (e) => {
    setTodoInput(e.target.value);
  };

  // handles addTodo
  const handleAddTodo = () => {
    if (!todoInput) return;
    const id = generateID();
    const content = todoInput;
    const newTodo = {
      id,
      content,
    };
    setTodoList([...todoList, newTodo]);
    document.getElementById("todo-input-field").value = "";
    setTodoInput("");
  };

  return (
    <div className="bg-gray-50 w-screen h-screen">
      <Header bgColor="blue">
        <div>
          <label htmlFor="todo-input">Skriv her:</label>
          <input
            id="todo-input-field"
            type="text"
            placeholder="gjøremål"
            onChange={handleTodoInput}
          />
          <Button onClick={() => handleAddTodo()}>Legg til listen</Button>
        </div>
      </Header>
      <Wrapper bgColor="white">
        <h2>TODO:</h2>
        <TodoIterator todoList={todoList} />
      </Wrapper>
    </div>
  );
};

export default App;
