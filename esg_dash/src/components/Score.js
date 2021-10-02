import { Grid, Typography } from "@material-ui/core";
import { TYPOGRAPHY, PRIMARY_COLOR } from "../styles/css/global";

export default function Score(props) {
	const { score, label1, label2 } = props;
	const styles = {
		circle: {
			width: 70,
			height: 70,
			borderRadius: 50,
			alignItems: "center",
			justifyContent: "center",
		},
		typography: {
			fontFamily: "Montserrat",
			fontWeight: "bold",
			fontSize: 18,
		},
		score: {
			fontSize: 36,
			color: "#ffffff",
		},
		label: {
			textAlign: "left",
		},
	};

	return (
		<Grid container style={{ alignItems: "center" }}>
			<Grid
				container
				style={{
					...styles.circle,
					backgroundColor:
						score <= 50 ? "#f00" : score <= 80 ? "#fc0" : PRIMARY_COLOR,
				}}
			>
				<Typography
					style={{
						...TYPOGRAPHY,
						...styles.score,
					}}
				>
					{score}
				</Typography>
			</Grid>
			<Grid style={{ marginLeft: 10 }}>
				<Typography style={{ ...TYPOGRAPHY, ...styles.label }}>
					{label1}
				</Typography>
				<Typography style={{ ...TYPOGRAPHY, ...styles.label }}>
					{label2}
				</Typography>
			</Grid>
		</Grid>
	);
}
