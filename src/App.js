import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Appheader from "./components/Appheader";
import Home from "./pages/home/view/Home";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      <BrowserRouter>
        <div className="App">
          {/*  <Navbar /> */}
          <Appheader />
          <Switch>
            <Route exact path="/" component={Home} />
            {/*  <Route path="/cart" component={Cart}/> */}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
