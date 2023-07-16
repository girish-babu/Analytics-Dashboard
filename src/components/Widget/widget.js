import BarChart from "../barchart/barchart";
import TimeSeriesChart from "../timeserieschart/timeserieschart";
import { BAR_CHART, TIME_SERIES, TIME_SERIES_OPTIONS } from "./widget.const";
import Dropdown from "../dropdown/dropdown";
import "./widget.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
	fetchTimeSeriesData,
	updateChartSelection,
	updateSelectedGranularity,
} from "./widget.actions";

export default Widget = (props) => {
	const {
		type,
		name,
		data,
		labels,
		loading,
		supportsGranularity,
		granularityOptions,
		selectedGranularity,
		chartSelected,
	} = props;

	const dispatch = useDispatch();

	const handleFetchData = () => {
		dispatch(fetchTimeSeriesData({ selectedGranularity, chartSelected }));
	};

	const renderBarChart = (widgetLabel, data, labels) => (
		<BarChart chartLabel={widgetLabel} data={data} labels={labels} />
	);

	const renderTimeSeriesChart = (widgetLabel, data, labels) => (
		<TimeSeriesChart
			style={{ width: "100%", height: "100%" }}
			chartLabel={widgetLabel}
			data={data}
			labels={labels}
		/>
	);

	const COMPONENT_MAPPER = {
		[BAR_CHART]: renderBarChart,
		[TIME_SERIES]: renderTimeSeriesChart,
	};

	return (
		<div
			className={`widget${
				supportsGranularity
					? " granularity-support"
					: " no-granularity-support"
			}`}
		>
			<div
				className={`chart-section${
					supportsGranularity
						? " granularity-support"
						: " no-granularity-support"
				}`}
			>
				{loading ? (
					<div className="loader"></div>
				) : (
					COMPONENT_MAPPER[type](
						name,
						data,
						labels,
						granularityOptions,
						selectedGranularity
					)
				)}
				{loading ? null : <span className="widget-label">{name}</span>}
			</div>
			{supportsGranularity && granularityOptions.length > 0 && (
				<div className="granularity-options">
					<div className="granularity-option">
						<label className="block tracking-wide text-gray-500 text-md font-bold mb-2">
							Granularity
						</label>
						<Dropdown
							options={granularityOptions}
							onChange={(value) =>
								dispatch(updateSelectedGranularity(value))
							}
							value={selectedGranularity}
						/>
					</div>
					<div className="granularity-option">
						<label className="block tracking-wide text-gray-500 text-md font-bold mb-2">
							Charts
						</label>
						<Dropdown
							options={TIME_SERIES_OPTIONS}
							onChange={(value) =>
								dispatch(updateChartSelection(value))
							}
							value={chartSelected}
						/>
					</div>
					<div className="buttons">
						<button className="apply-filter text-md text-white">
							Apply Filter
						</button>
						<button
							className="fetch-data text-md text-gray-900"
							onClick={handleFetchData}
						>
							Fetch Data
						</button>
					</div>
				</div>
			)}
		</div>
	);
};
