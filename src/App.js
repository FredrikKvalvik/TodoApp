import React from "react";
import Wrapper from "./Components/Wrapper";
import Header from "./Components/Header";

const App = () => {
  return (
    <div className="bg-gray-50 w-screen h-screen">
      <Header bgColor="white">
        <div>
          <label htmlFor="todo-input">Skriv her:</label>
          <input type="text" placeholder="gjøremål" />
        </div>
      </Header>
      <Wrapper>
        <h2>TODO:</h2>
      </Wrapper>
    </div>
  );
};

export default App;
