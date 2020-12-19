import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import ContactMe from "./pages/ContactMe"


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/projects"}>
            <Projects />
          </Route>
          <Route exact path={"/contactme"}>
            <ContactMe />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
