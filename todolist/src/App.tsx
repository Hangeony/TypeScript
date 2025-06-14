import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todolist from "./Todolist";
import Timer from "./Timer";
import Clock from "./Time";

function App() {
  return (
    <div className="container">
      <Todolist />
      <Timer />
      <Clock />
    </div>
  );
}

export default App;
