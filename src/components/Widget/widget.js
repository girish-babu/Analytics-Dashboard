import React from "react";
import BarChart from "../barchart/barchart";
import TimeSeriesChart from "../timeserieschart/timeserieschart";
import Dropdown from "../dropdown/dropdown";
import Modal from "../modal/modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
	BAR_CHART,
	TIME_SERIES,
	TIME_SERIES_OPTIONS,
	NONE,
	MODAL_FILTER_OPTIONS,
	ITEM_TYPE_OPTIONS,
} from "./widget.const";
import {
	applyFilterAndFetch,
	fetchTimeSeriesData,
	updateChartSelection,
	updateSelectedGranularity,
} from "./widget.actions";
import { TIME_SERIES_DATA } from "../widgetdashboard/widgetdashboard.const";
import "./widget.scss";

const Widget = (props) => {
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
	const [modalOpen, setModalOpen] = useState(false);
	const [filterOrderStatus, setOrderStatus] = useState(NONE);
	const [filterItemType, setItemType] = useState(NONE);
	const dispatch = useDispatch();

	const applyFilterAndFetchData = () => {
		setModalOpen(false);
		dispatch(
			applyFilterAndFetch({
				order_status: filterOrderStatus,
				item_type: filterItemType,
			})
		);
	};

	const renderBarChart = (widgetLabel, data, labels) => (
		<BarChart
			className={"chart"}
			id={"bar-chart"}
			chartLabel={widgetLabel}
			data={data}
			labels={labels}
		/>
	);

	const renderTimeSeriesChart = (widgetLabel, data, labels) => (
		<TimeSeriesChart
			className={"chart"}
			style={{ width: "100%", height: "100%" }}
			chartLabel={widgetLabel}
			data={data}
			labels={labels}
		/>
	);

	const renderFilterComponent = () => (
		<div
			className="flex flex-col"
			style={{ height: "200px", marginTop: "20px", alignItems: "center" }}
		>
			<div
				className="filter-option flex flex-row"
				style={{ marginBottom: "20px" }}
			>
				<label
					className="right-0 tracking-wide text-gray-500 text-md font-bold mb-2"
					style={{
						width: "120px",
						marginTop: "10px",
						marginRight: "30px",
					}}
				>
					Order Status
				</label>
				<Dropdown
					options={MODAL_FILTER_OPTIONS}
					onChange={(value) => setOrderStatus(value)}
					value={filterOrderStatus}
				/>
			</div>
			<div className="filter-option flex flex-row">
				<label
					className="right-0 tracking-wide text-gray-500 text-md font-bold mb-2"
					style={{
						width: "120px",
						marginTop: "10px",
						marginRight: "30px",
					}}
				>
					Item Type
				</label>
				<Dropdown
					options={ITEM_TYPE_OPTIONS}
					onChange={(value) => setItemType(value)}
					value={filterItemType}
				/>
			</div>
		</div>
	);

	const COMPONENT_MAPPER = {
		[BAR_CHART]: renderBarChart,
		[TIME_SERIES]: renderTimeSeriesChart,
	};

	return (
		<div className={"widget"}>
			<div className={"chart-section"}>
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
				{loading || name === TIME_SERIES_DATA ? null : (
					<span className="widget-label">{name}</span>
				)}
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
						<button
							className="apply-filter text-md bg-gray-300 hover:bg-gray-500 text-white"
							onClick={() => setModalOpen(true)}
						>
							Apply Filter
						</button>
						<button
							data-testid={"fetch-data"}
							className="fetch-data text-md text-gray-900 bg-blue-200 hover:bg-blue-400"
							onClick={() =>
								dispatch(
									fetchTimeSeriesData({
										selectedGranularity,
										chartSelected,
									})
								)
							}
						>
							Fetch Data
						</button>
					</div>
					{modalOpen && (
						<Modal
							open={modalOpen}
							onClose={setModalOpen}
							component={renderFilterComponent}
							applyFilter={applyFilterAndFetchData}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export default Widget;
