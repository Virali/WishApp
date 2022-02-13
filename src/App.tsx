import React from "react";

import "./App.scss";
import Sidebar from "./modules/Sidebar/Sidebar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./modules/Header/Header";
import { ActivityContainer } from "./modules/ActivityContainer/ActivityContainer";
import { AuthComponent } from "./modules/LoginPage/AuthComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Sidebar />
            <Header />
            <ActivityContainer />
            <AuthComponent />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
