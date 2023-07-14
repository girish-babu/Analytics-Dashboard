import { useEffect } from "react";
import Widget from "../Widget/widget";
import { TIME_SERIES } from "../Widget/widget.const";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "./widgetdashboard.actions";
import "./widgetdashboard.css";

export default WidgetDashboard = ({ dateRange }) => {
	const widgetsData = useSelector((state) => state.widgetDashboard);
	const dispatch = useDispatch();
	useEffect(() => {
		console.log("Inside useEffect...");
		dispatch(fetchAllData(dateRange));
	}, [dateRange]);

	return (
		<div className="widget-dashboard">
			{widgetsData.map((widget, i) => {
				return (
					<Widget
						key={i}
						widgetType={widget.type}
						widgetLabel={widget.label}
						data={widget.data}
						labels={widget.labels}
						loading={widget.loading}
					/>
				);
			})}
			<Widget
				widgetType={TIME_SERIES}
				widgetLabel={"Number of orders by day"}
				data={[]}
				labels={[]}
				loading={true}
			/>
		</div>
	);
};
