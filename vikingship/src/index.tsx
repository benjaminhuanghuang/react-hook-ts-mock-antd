import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";

import App from "./App";
// import Demo from "./App-html";
import Demo from "./App-Button";

import MenuDemo from "./MenuDemo";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Demo />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
