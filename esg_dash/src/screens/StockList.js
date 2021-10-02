import { Grid, Typography, Box } from "@material-ui/core";
import { useState, useEffect } from "react";

import ListItem from "../components/ListItem";
import ListSearchBar from "../components/ListSearchBar";
import { calcESGScore } from "../lib/lib";

export default function StockList(props) {
	const { data, selector } = props;
	const styles = {
		background: {
			flexDirection: "column",
		},
	};

	const [search, setSearch] = useState("");

	const getFilteredAndSortedStocks = () => {
		const res = Object.keys(data)
			.filter(
				(ticker) =>
					ticker.toLowerCase().includes(search.toLowerCase()) ||
					data[ticker].name.toLowerCase().includes(search.toLowerCase())
			)
			.sort((a, b) => (calcESGScore(data[a]) > calcESGScore(data[b]) ? -1 : 1));
		return res;
	};

	return (
		<Grid>
			<ListSearchBar setSearch={setSearch} />
			<Box
				style={{
					overflowY: "scroll",
					height: window.innerHeight * 0.85,
				}}
			>
				<Grid container item style={styles.background}>
					{getFilteredAndSortedStocks().map((ticker) => {
						return (
							<ListItem
								ticker={ticker}
								name={data[ticker].name}
								score={calcESGScore(data[ticker])}
								data={data[ticker]}
								onClick={selector}
							/>
						);
					})}
				</Grid>
			</Box>
		</Grid>
	);
}
