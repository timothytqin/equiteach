import { Grid, Typography } from "@material-ui/core";
import { formatDonationAmount } from "../lib/lib";

import { TYPOGRAPHY, PRIMARY_COLOR } from "../styles/css/global";

export default function DonationItem(props) {
	const { rank, ticker, data } = props;
	const styles = {
		background: {
			backgroundColor: rank % 2 == 1 ? "#F3F3F3" : "#FFF",
			width: window.innerWidth * 0.2,
			padding: 10,
			borderBottom: "1px solid #D5D5D5",
		},
		rankContainer: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
		},
		tickerContainer: {
			flex: 3,
			alignItems: "center",
		},
		amountContainer: {
			flex: 2,
			justifyContent: "center",
			alignItems: "center",
		},
		rank: { fontSize: 32 },
		ticker: { fontSize: 28 },
		amount: { fontSize: 24 },
	};

	return (
		<Grid container item style={styles.background}>
			<Grid container style={styles.rankContainer}>
				<Typography
					style={{
						...TYPOGRAPHY,
						...styles.rank,
					}}
				>
					{rank}
				</Typography>
			</Grid>
			<Grid container style={styles.tickerContainer}>
				<Typography
					style={{
						...TYPOGRAPHY,
						...styles.ticker,
					}}
				>
					{ticker}
				</Typography>
			</Grid>
			<Grid container style={styles.amountContainer}>
				{data[ticker] && data[ticker].donation && (
					<Typography
						style={{
							...TYPOGRAPHY,
							...styles.amount,
						}}
					>
						${formatDonationAmount(`${data[ticker].donation}`)}
					</Typography>
				)}
			</Grid>
		</Grid>
	);
}
