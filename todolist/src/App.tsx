import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let name: string = "리엑트";
  const style = {
    backgroundColor: "black",
    color: "white",
    fontSize: "48px",
    fontWeight: "bold",
    padding: "20px",
  };
  return (
    <div>
      <h1 style={style}>
        Hellow,
        {name === "리액트" ? <h1>{name} </h1> : <h1>네임값 없음</h1>}
        <p>반갑습니다.</p>
      </h1>
      <br /> {/* 닫는 코딩은 꼭 해줘야함 */}
    </div>
  );
}

export default App;
