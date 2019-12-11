import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

// COMPONENTS
import Header from './components/header/header'
import Main from './components/main/main'

export default () => {
  return (
    <Router>
      <div className="Container">
          <Header />
          <Main />
        {/*<Switch>*/}
        {/*    <Route exact path="/" component={} />*/}
        {/*</Switch>*/}
      </div>
    </Router>
  );
};
