export const getCurrPrice = (data) => {
	const keys = Object.keys(data).sort();
	return parseFloat(data[keys[keys.length - 1]]).toFixed(2);
};

export const getPriceChange = (data) => {
	const keys = Object.keys(data).sort();
	return parseFloat(data[keys[keys.length - 1]] - data[keys[0]]).toFixed(2);
};

export const getTickerMap = (tickers) => {
	const map = {};
	for (let ticker of tickers) {
		map[ticker.SK] = ticker;
	}
	return map;
};

export const getTimeSeriesData = (time_data) => {
	let tempData = [];
	for (const timestamp of Object.keys(time_data)) {
		const newData = {};
		newData["time"] = new Date(timestamp).toLocaleDateString();
		newData["price"] = time_data[timestamp];
		tempData.push(newData);
	}

	tempData = tempData.sort((a, b) => {
		return new Date(a.time) < new Date(b.time) ? -1 : 1;
	});
	return tempData;
};

export const calcESGScore = (data) => {
	return Math.round((data.e_score + data.s_score + data.g_score) / 3);
};

export const getRandInt = (min, max) => {
	return parseInt(Math.random() * (max - min + 1) + min);
};
