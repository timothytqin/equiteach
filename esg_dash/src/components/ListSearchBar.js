import { useEffect, useState } from "react";

import clsx from "clsx";
import {
	Grid,
	Typography,
	InputAdornment,
	TextField,
	Input,
} from "@material-ui/core";

import { TYPOGRAPHY, PRIMARY_COLOR } from "../styles/css/global";

import SearchIcon from "@material-ui/icons/Search";

export default function ListSearchBar(props) {
	const { setSearch } = props;
	const styles = {
		background: {
			backgroundColor: "#E4E4E4",
			width: window.innerWidth * 0.26,
			borderBottom: "2px solid #D5D5D5",
			height: window.innerHeight * 0.06,
			justifyContent: "center",
			alignItems: "center",
		},
		icon: {
			padding: 8,
		},
	};

	return (
		<Grid container item style={styles.background}>
			<TextField
				placeholder="Search for stock..."
				hiddenLabel
				style={{ width: "94%" }}
				variant="standard"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon style={styles.icon} />
						</InputAdornment>
					),
					disableUnderline: true,
				}}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</Grid>
	);
}
