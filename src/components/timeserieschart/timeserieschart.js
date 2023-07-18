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
import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(
	LineElement,
	TimeScale,
	CategoryScale, // x axis
	LinearScale,
	PointElement,
	zoomPlugin
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
				beginAtZero: true,
			},
		},
		plugins: {
			zoom: {
				zoom: {
					wheel: {
						enabled: true,
						speed: 0.01,
					},
					pinch: {
						enabled: true,
					},
				},
				pan: {
					enabled: true,
				},
			},
		},
	};

	return <Line data={timeSeriesData} options={options} />;
};

export default TimeSeriesChart;
