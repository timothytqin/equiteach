import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/fonts/AirbnbCerealBlack.ttf";
import "./styles/fonts/AirbnbCerealBold.ttf";
import "./styles/fonts/AirbnbCerealBook.ttf";
import "./styles/fonts/AirbnbCerealExtraBold.ttf";
import "./styles/fonts/AirbnbCerealLight.ttf";
import "./styles/fonts/AirbnbCerealMedium.ttf";

import NavBar from "./components/NavBar";

ReactDOM.render(
	<Router>
		<Route path="/" component={NavBar} />
		<Switch>
			<Route exact path="/" component={App} />
		</Switch>
	</Router>,
	document.getElementById("root")
);
