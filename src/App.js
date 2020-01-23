import React from "react";
import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card
        title="Name"
        body="Lorem Ipsum Lorem Ipsum Lorem Ipsum"
        buttonText="Go somewhere"
      >
        <img src="https://via.placeholder.com/150" />
      </Card>
    </div>
  );
}

export default App;
