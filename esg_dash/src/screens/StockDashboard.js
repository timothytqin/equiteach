import { useEffect, useState } from "react";

import {
	AreaChart,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Area,
} from "recharts";
import { Grid, Typography, Box } from "@material-ui/core";

import Score from "../components/Score";
import Metric from "../components/Metric";
import Article from "../components/Article";
import { TYPOGRAPHY, PRIMARY_COLOR } from "../styles/css/global";
import {
	calcESGScore,
	getCurrPrice,
	getPriceChange,
	getTimeSeriesData,
} from "../lib/lib";

export default function StockDashboard(props) {
	const { data, ticker } = props;

	// const [details, setDetails] = useState({});
	// const [data, setData] = useState([]);
	// const [articles, setArticles] = useState([]);
	// const [score, setScore] = useState();

	const styles = {
		tickerName: {
			fontSize: 44,
			lineHeight: 1,
			marginRight: 25,
		},
		subscript: {
			fontSize: 14,
			color: "#838383",
		},
		value: {
			marginRight: 20,
		},
	};

	return data ? (
		<Box
			style={{
				overflowY: "scroll",
				height: window.innerHeight * 0.91,
				flex: 1,
			}}
		>
			<Grid container style={{ padding: "5% 8%" }}>
				<Grid container direction="row">
					<Grid item style={{ flex: 1 }}>
						<Grid container item style={{ alignItems: "flex-end" }}>
							<Typography style={{ ...TYPOGRAPHY, ...styles.tickerName }}>
								{ticker}
							</Typography>
							<Typography style={{ ...TYPOGRAPHY, ...styles.subscript }}>
								{data.name}
							</Typography>
						</Grid>
						{data.stocks && (
							<Grid container item style={{ marginTop: 20 }}>
								<Typography style={{ ...TYPOGRAPHY, ...styles.value }}>
									{getCurrPrice(data.stocks)}
								</Typography>
								<Typography
									style={{
										...TYPOGRAPHY,
										color:
											getPriceChange(data.stocks) > 0 ? PRIMARY_COLOR : "#f00",
									}}
								>
									{getPriceChange(data.stocks)}
								</Typography>
							</Grid>
						)}
					</Grid>
					<Grid item>
						<Score score={calcESGScore(data)} label1={"ESG"} label2={"Score"} />
					</Grid>
				</Grid>
				{data.stocks && (
					<Grid container>
						<AreaChart
							width={window.innerWidth * 0.45}
							height={350}
							data={getTimeSeriesData(data.stocks)}
							margin={{ top: 50 }}
						>
							<defs>
								<linearGradient id="green" x1="0" y1="0" x2="0" y2="1">
									<stop
										offset="5%"
										stopColor={PRIMARY_COLOR}
										stopOpacity={0.8}
									/>
									<stop
										offset="95%"
										stopColor={PRIMARY_COLOR}
										stopOpacity={0}
									/>
								</linearGradient>
								<linearGradient id="red" x1="0" y1="0" x2="0" y2="1">
									<stop offset="5%" stopColor={"#f00"} stopOpacity={0.8} />
									<stop offset="95%" stopColor={"#f00"} stopOpacity={0} />
								</linearGradient>
							</defs>
							<XAxis dataKey="time" type="category" />
							<YAxis />
							<CartesianGrid strokeDasharray="3 3" />
							<Tooltip />
							<Area
								type="monotone"
								dataKey="price"
								stroke={
									getPriceChange(data.stocks) > 0 ? PRIMARY_COLOR : "#f00"
								}
								fillOpacity={1}
								fill={`url(#${
									getPriceChange(data.stocks) > 0 ? "green" : "red"
								})`}
							/>
						</AreaChart>
					</Grid>
				)}
				<Typography
					style={{
						...TYPOGRAPHY,
						textAlign: "left",
						color: "#838383",
						fontSize: 12,
						marginTop: 20,
						marginBottom: 20,
					}}
				>
					Positivity Score Metrics
				</Typography>
				<Grid container direction="row">
					<Metric
						score={data.e_score}
						label1={"Environment"}
						label2={"Impact"}
						bullets={[
							"C02 Performance Score is B",
							"C02 Relative Output Rate is 14.64 times",
							"Plastic Performance score is 97.68",
							"Plastic Efficiency Rate is 59.98%",
							"Sulfer Performance Score is 99",
						]}
					/>
					<Metric
						score={data.s_score}
						label1={"Social"}
						label2={"Impact"}
						bullets={[
							"Calculated through Sentiment Analysis of 8 News Sources",
							"Calculated through Gender and LGBT Workplace Equality Statistics",
						]}
					/>
					<Metric
						score={data.g_score}
						label1={"Labor"}
						label2={"Practices"}
						bullets={[
							"93% of Approval of Top Management",
							"97.5% Employee Satisfaction",
							"79% for an Employee Recomendation",
						]}
					/>
				</Grid>

				{data.articles && (
					<>
						<Typography
							style={{
								...TYPOGRAPHY,
								textAlign: "left",
								color: "#838383",
								fontSize: 12,
								marginTop: 20,
								marginBottom: 20,
							}}
						>
							Found Articles
						</Typography>
						<Grid container direction="row" style={{ display: "flex" }}>
							{data.articles.map((article) => (
								<Article
									imgSrc={article.imgUrl}
									title={article.title}
									timestamp={article.date}
									url={article.url}
								/>
							))}
						</Grid>
					</>
				)}
			</Grid>
		</Box>
	) : (
		<Grid
			container
			style={{
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<img
				src="https://i.kym-cdn.com/entries/icons/facebook/000/029/959/Screen_Shot_2019-06-05_at_1.26.32_PM.jpg"
				alt="stonks"
				style={{
					opacity: 0.3,
					width: "100%",
					height: "100%",
				}}
			/>
			<Typography
				style={{
					...TYPOGRAPHY,
					fontSize: 44,
					color: "#696969",
					position: "absolute",
				}}
			>
				Select a stock
			</Typography>
		</Grid>
	);
}
