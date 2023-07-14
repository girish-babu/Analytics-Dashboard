import BarChart from "../barchart/barchart";
import TimeSeriesChart from "../timeserieschart/timeserieschart";
import { BAR_CHART, PIE_CHART, TIME_SERIES } from "./widget.const";
import "./widget.scss";

export default Widget = (props) => {
	const { widgetType, widgetLabel, data, labels, loading } = props;

	const renderBarChart = () => (
		<BarChart chartLabel={widgetLabel} data={data} labels={labels} />
	);

	const renderTimeSeriesChart = () => (
		<TimeSeriesChart chartLabel={widgetLabel} data={data} labels={labels} />
	);

	return (
		<div className="widget" draggable>
			{loading ? (
				<div className="loader">Loading data...</div>
			) : widgetType === BAR_CHART ? (
				renderBarChart()
			) : (
				renderTimeSeriesChart()
			)}
			{loading ? null : (
				<span className="widget-label">{widgetLabel}</span>
			)}
		</div>
	);
};
