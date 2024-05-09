// App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopicList from "./TopicList";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Sidebar} />
        <Route path="/topics/oil" component={TopicList} />
      </Switch>
    </Router>
  );
}

export default App;
