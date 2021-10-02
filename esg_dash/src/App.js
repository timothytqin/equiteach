import { useEffect, useState } from "react";
import axios from "./lib/axios";
import { getTickerMap } from "./lib/lib";
import StockDashboard from "./screens/StockDashboard";
import StockList from "./screens/StockList";

function App() {
	const [selectedTicker, setSelectedTicker] = useState("");
	const [stockData, setStockData] = useState({});

	useEffect(() => {
		axios.get("/stocks").then((res) => {
			setStockData(getTickerMap(res.data.body));
		});
	}, []);

	return (
		<div className="App" style={styles.page}>
			<StockList data={stockData} selector={setSelectedTicker} />
			<StockDashboard
				data={stockData[selectedTicker]}
				ticker={selectedTicker}
			/>
		</div>
	);
}

export default App;

const styles = {
	page: {
		display: "flex",
		flexDirection: "row",
	},
};
