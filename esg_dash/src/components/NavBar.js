import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { PRIMARY_COLOR, TYPOGRAPHY } from "../styles/css/global";
import logo from "../styles/assets/logo_light.png";
import { Typography } from "@material-ui/core";

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
				<Toolbar>
					<img
						style={{
							width: 60,
							height: "80%",
							marginRight: 10,
						}}
						src={logo}
						alt="Equiteach"
					/>
					<Typography style={{ ...TYPOGRAPHY, fontSize: 36 }}>
						Equiteach
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
