import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";

import { TYPOGRAPHY } from "../styles/css/global";
import DonationItem from "../components/DonationItem";

export default function DonationLeaderboard({ data }) {
	const styles = {
		header: { padding: 10, textAlign: "center" },
		title: {
			fontSize: 24,
		},
	};

	const getDonatedTickers = (tickers) => {
		return Object.keys(tickers)
			.filter((ticker) => data[ticker].donation && data[ticker].donation > 0)
			.sort((a, b) => (data[a].donation > data[b].donation ? -1 : 1));
	};

	return (
		<Grid>
			<Grid style={styles.header}>
				<Typography
					style={{
						...TYPOGRAPHY,
						...styles.title,
					}}
				>
					Donations Leaderboard
				</Typography>
			</Grid>
			{[
				getDonatedTickers(data),
				getDonatedTickers(data),
				getDonatedTickers(data),
			].map((ticker, index) => (
				<DonationItem data={data} ticker={ticker} rank={index + 1} />
			))}
		</Grid>
	);
}
