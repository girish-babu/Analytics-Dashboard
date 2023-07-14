import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

const PieChart = ({ data, labels }) => {
	const chartData = {
		labels: labels,
		datasets: [
			{
				data: data,
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(255, 159, 64, 0.2)",
					"rgba(255, 205, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(54, 162, 235, 0.2)",
				],
			},
		],
	};

	return (
		<Pie
			style={{ width: "45%", height: "15rem" }}
			data={chartData}
			options={{ maintainAspectRatio: false }}
		/>
	);
};

export default PieChart;
