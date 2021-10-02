import { Grid, Typography } from "@material-ui/core";
import { TYPOGRAPHY, PRIMARY_COLOR } from "../styles/css/global";
import CloseIcon from "@material-ui/icons/Close";

export default function Popup(props) {
	const { visible, setVisible, article } = props;
	const styles = {};

	return (
		<Grid
			container
			style={{
				position: "absolute",
				left: 0,
				top: 0,
				width: window.innerWidth,
				height: window.innerHeight,
				backgroundColor: "#94949480",
				zIndex: 1000,
				display: visible ? "flex" : "none",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Grid
				style={{
					backgroundColor: "#fff",
					height: window.innerHeight * 0.8,
					width: window.innerWidth * 0.8,
					borderRadius: 50,
				}}
			>
				<Grid
					style={{
						marginLeft: window.innerWidth * 0.75,
						marginTop: window.innerHeight * 0.05,
					}}
					onClick={() => setVisible(false)}
				>
					<CloseIcon fontSize="large" />
				</Grid>
				<Grid style={{ display: "flex", justifyContent: "center" }}>
					<iframe
						src={article.url}
						width={"90%"}
						height={window.innerHeight * 0.6}
					></iframe>
				</Grid>
			</Grid>
		</Grid>
	);
}
