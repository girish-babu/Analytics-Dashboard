import React, { useEffect, useRef } from "react";
import {
	Chart as ChartJS,
	BarElement,
	CategoryScale,
	LinearScale,
	Tooltip,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const BarChart = ({ chartLabel, data, labels }) => {
	const barData = {
		labels: labels,
		datasets: [
			{
				label: chartLabel,
				data: data,
				backgroundColor: [
					"rgba(255, 99, 132, 0.3)",
					"rgba(255, 159, 64, 0.3)",
					"rgba(255, 205, 86, 0.3)",
					"rgba(75, 192, 192, 0.3)",
					"rgba(54, 162, 235, 0.3)",
				],
				borderColor: [
					"rgb(255, 99, 132)",
					"rgb(255, 159, 64)",
					"rgb(255, 205, 86)",
					"rgb(75, 192, 192)",
					"rgb(54, 162, 235)",
				],
				borderWidth: 1,
			},
		],
	};

	const options = {};

	return <Bar data={barData} options={options}></Bar>;
};

export default BarChart;
