import { Grid, Typography } from "@material-ui/core";
import { TYPOGRAPHY, PRIMARY_COLOR } from "../styles/css/global";

export default function Bullet(props) {
	const { text } = props;
	const styles = {};

	return (
		<Grid container style={{ marginLeft: 75 }} direction="row">
			<Grid
				style={{
					width: 5,
					height: 5,
					backgroundColor: PRIMARY_COLOR,
					marginRight: 5,
					marginTop: 5,
				}}
			/>
			<Grid style={{ flex: 1 }}>
				<Typography
					style={{
						...TYPOGRAPHY,
						fontWeight: "lighter",
						fontSize: 10,
						color: "#838383",
					}}
				>
					{text}
				</Typography>
			</Grid>
		</Grid>
	);
}
