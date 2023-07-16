import { useEffect } from "react";
import Widget from "../Widget/widget";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "./widgetdashboard.actions";
import "./widgetdashboard.scss";

export default WidgetDashboard = ({ dateRange }) => {
	const widgetsData = useSelector((state) => state.widgetDashboard);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllData());
	}, [dateRange]);

	return (
		<div className="widget-dashboard">
			{widgetsData.map((widget, i) => {
				return <Widget key={i} {...widget} />;
			})}
		</div>
	);
};
