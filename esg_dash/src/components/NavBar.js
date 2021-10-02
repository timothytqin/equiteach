import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { PRIMARY_COLOR } from "../styles/css/global";

export default function NavBar(props) {
	return (
		<div>
			<AppBar
				position="static"
				elevation={0}
				style={{
					backgroundColor: `${PRIMARY_COLOR}80`,

					height: window.innerHeight * 0.09,
					justifyContent: "center",
				}}
			>
				<Toolbar></Toolbar>
			</AppBar>
		</div>
	);
}
