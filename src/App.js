import { React, useState } from "react";

import Wrapper from "./Components/Wrapper";
import Header from "./Components/Header";
import Button from "./Components/Button";
import TodoIterator from "./Components/TodoIterator";
const App = () => {
  const [todoInput, setTodoInput] = useState("");

  const handleTodoInput = (e) => {
    setTodoInput(e.target.value);
  };

  const todoList = [
    {
      content: "heisann",
      id: 123123,
    },
    {
      content: "heisann",
      id: 123123,
    },
    {
      content: "heisann",
      id: 123123,
    },
  ];

  return (
    <div className="bg-gray-50 w-screen h-screen">
      <Header bgColor="blue">
        <div>
          <label htmlFor="todo-input">Skriv her:</label>
          <input
            type="text"
            placeholder="gjøremål"
            onChange={handleTodoInput}
          />
          <Button>Legg til listen</Button>
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
