import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import dashboard from "./pages/dashboard";
import profile from "./pages/profile";
import Tf_model from "./pages/tf-model";
import Sidebar from './sidebar';
import login from './pages/login';
import loading from './pages/loading';
import leaderboard from "./pages/leaderboard";

import React from "react";
function App() {
  let renderSidebar = () => {
    let currentPath = window.location.pathname;
    if(currentPath === '/login' || currentPath === '/loading') {} 
    else {
      return <Sidebar/>
    }
  }

  return (
    <Router>
      <div>
      { renderSidebar() }
        <Switch>
            <Route exact path="/login" component={login}/>
            <Route exact path="/loading" component={loading}/>
            <Route exact path="/" component={dashboard}/>
            <Route exact path="/profile" component={profile}/>
            <Route exact path="/tf-model" component={Tf_model} />
            <Route exact path="/leaderboard" component={leaderboard}/>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
