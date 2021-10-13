import React from "react";
import Wrapper from "./Components/Wrapper";
import Header from "./Components/Header";
import Button from "./Components/Button";

const App = () => {
  const [todoInput, setTodoInput] = useState("");

  const handleTodoInput = (e) => {
    setTodoInput(e.value);
  };

  return (
    <div className="bg-gray-50 w-screen h-screen">
      <Header bgColor="blue">
        <div>
          <label htmlFor="todo-input">Skriv her:</label>
          <input
            type="text"
            placeholder="gjøremål"
            onchange={handleTodoInput}
          />
          <Button>Legg til listen</Button>
        </div>
      </Header>
      <Wrapper bgColor="white">
        <h2>TODO:</h2>
      </Wrapper>
    </div>
  );
};

export default App;
