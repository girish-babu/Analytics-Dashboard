import React from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	LineElement,
	CategoryScale, // x axis
	LinearScale,
	PointElement,
	TimeScale,
} from "chart.js";
import "chartjs-adapter-moment";

ChartJS.register(
	LineElement,
	TimeScale,
	CategoryScale, // x axis
	LinearScale,
	PointElement
);

const TimeSeriesChart = ({ chartLabel, data, labels }) => {
	const timeSeriesData = {
		labels: labels,
		datasets: [
			{
				label: chartLabel,
				data: data,
				backgroundColor: "aqua",
				tension: 0.4,
				pointBorderColor: "aqua",
			},
		],
	};

	const options = {
		scales: {
			y: {
				type: "time",
				time: {
					unit: "day", // Set the default unit to 'day' for hourly data
				},
			},
		},
	};

	return (
		<Line
			style={{ width: "45%", height: "45%" }}
			data={timeSeriesData}
			options={options}
		/>
	);
};

export default TimeSeriesChart;
