import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { StateComponentContainer } from "./UseState";
import ClockComponent from "./UseEffect";
import ChuckNorrisComponent from "./UseEffect2";


let app = <App />;

const DontUseMeForReal = () => {
  return (
    <div className="App" onClick={handleSelect}>
      <a href="/" className="x" id="app1">
        UseState
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app2">
        Clock
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app3">
        jokes
      </a>{" "}
      &nbsp;
      {/* Add as many as you have exercises, but remember className="x" */}
      {app}
    </div>
  );
};

function handleSelect(event) {
  event.preventDefault();
  if (event.target.className !== "x") {
    return;
  }
  const id = event.target.id;
  switch (id) {
    case "app1":
      app = <StateComponentContainer />;
      break;
    case "app2":
        app = <ClockComponent />;
        break;
    case "app3":
        app = <ChuckNorrisComponent />;
        break;
  }
  ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));