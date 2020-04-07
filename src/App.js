import React from "react";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/dashboard";
import { AuthProvider } from "./Auth";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Router>
    </AuthProvider>
  );
}

export default App;
