import React, { useState, useEffect } from "react";
import { AreaChart, Area } from "recharts";

import { getTimeSeriesData } from "../lib/lib";
import { PRIMARY_COLOR } from "../styles/css/global";

export default function TinyChartListItem(props) {
	const { data, color } = props;

	return (
		<AreaChart width={80} height={40} data={getTimeSeriesData(data.stocks)}>
			<defs>
				<linearGradient id="green" x1="0" y1="0" x2="0" y2="1">
					<stop offset="5%" stopColor={PRIMARY_COLOR} stopOpacity={0.8} />
					<stop offset="95%" stopColor={PRIMARY_COLOR} stopOpacity={0} />
				</linearGradient>
				<linearGradient id="red" x1="0" y1="0" x2="0" y2="1">
					<stop offset="5%" stopColor={"#f00"} stopOpacity={0.8} />
					<stop offset="95%" stopColor={"#f00"} stopOpacity={0} />
				</linearGradient>
			</defs>
			<Area
				type="monotone"
				dataKey="price"
				stroke={color}
				fill={`url(#${color == PRIMARY_COLOR ? "green" : "red"})`}
				fillOpacity={1}
			/>
		</AreaChart>
	);
}
