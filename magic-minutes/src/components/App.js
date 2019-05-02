//App.js

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';
import AppRouter from "./AppRouter"

function App(){
	return(
		<div>
			<h1>Magic Minutes!</h1>
			<AppRouter />
		</div>
  );
}

export default App;