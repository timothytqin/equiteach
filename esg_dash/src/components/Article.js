import { Grid, Typography } from "@material-ui/core";
import { useState } from "react";
import { TYPOGRAPHY, PRIMARY_COLOR } from "../styles/css/global";
import Popup from "./Popup";

export default function Article(props) {
	const { imgSrc, title, timestamp, url } = props;
	const [visible, setVisible] = useState(false);
	const styles = {
		container: {
			padding: 10,
			borderRadius: 10,
			borderWidth: 1,
			borderStyle: "solid",
			flex: 1,
			marginLeft: 5,
			marginRight: 5,
		},
		img: {
			width: "100%",
			height: "100%",
			borderRadius: 5,
		},
		title: {
			marginTop: 10,
			marginBottom: 50,
		},
		time: {
			fontSize: 12,
			color: "#838383",
		},
	};

	const getRandColor = () => {
		return Math.floor(Math.random() * 16777215).toString(16);
	};

	return (
		<>
			<Grid
				container
				style={{ ...styles.container, borderColor: `#${getRandColor()}` }}
				onClick={() => {
					window.open(url, "_blank");
				}}
			>
				<Grid>
					<img src={imgSrc} style={styles.img} />
				</Grid>
				<Grid>
					<Typography
						style={{
							...TYPOGRAPHY,
							...styles.title,
						}}
					>
						{title}
					</Typography>
					<Typography
						style={{
							...TYPOGRAPHY,
							...styles.time,
						}}
					>
						{timestamp}
					</Typography>
				</Grid>
			</Grid>
			{/* <Popup
        visible={visible}
        setVisible={setVisible}
        article={(imgSrc, title, timestamp, url)}
      /> */}
		</>
	);
}
