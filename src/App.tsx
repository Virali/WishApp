import React from "react";

import "./App.scss";
import Sidebar from "./modules/Sidebar/Sidebar";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./modules/Header/Header";
import { ActivityContainer } from "./modules/ActivityContainer/ActivityContainer";
import { useState } from "react";
import { AuthContainer } from "./modules/LoginPage/AuthContainer";
import Modal from "./modules/_common/Modal";

function App() {
  const [authStatus, setAuthStatus] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Sidebar />
            <Header />
            <ActivityContainer />
            <Modal content={<AuthContainer />} toShow={true}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
