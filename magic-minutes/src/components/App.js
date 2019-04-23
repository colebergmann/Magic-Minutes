//App.js

<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
=======
import React from 'react';
import AppRouter from "./AppRouter"
>>>>>>> ed52c87049be3572da312cdcc791b566d437e4db

function Index() {
  return <h2>Home</h2>;
}

function Today() {
  return <h2>Today</h2>;
}

function Plan() {
  return <h2>Plan</h2>;
}

<<<<<<< HEAD
function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/today/">Today</Link>
            </li>
            <li>
              <Link to="/plan/">Plan</Link>
            </li>
          </ul>
        </nav>
=======
function App(){
	return(
		<div>
			<h1>Magic Minutes!</h1>
			<AppRouter />
		</div>
>>>>>>> ed52c87049be3572da312cdcc791b566d437e4db

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={Today} />
        <Route path="/users/" component={Plan} />
      </div>
    </Router>
  );
}

export default AppRouter;