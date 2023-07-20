import React, { useEffect } from "react";
import Widget from "../Widget/widget";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "./widgetdashboard.actions";
import { Draggable } from "react-beautiful-dnd";
import "./widgetdashboard.scss";

const WidgetDashboard = ({ dateRange }) => {
	const widgetsData = useSelector((state) => state.widgetDashboard);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllData());
	}, [dateRange]);

	return (
		<div data-testid="widget-dashboard" className="widget-dashboard">
			{widgetsData.map((widget, i) => (
				<Draggable key={widget.id} draggableId={widget.name} index={i}>
					{(provided) => (
						<div
							className={`widget-wrapper${
								widget.supportsGranularity
									? " granularity-support"
									: " no-granularity-support"
							}`}
							ref={provided.innerRef}
							{...provided.draggableProps}
							{...provided.dragHandleProps}
						>
							<Widget key={i} {...widget} />
						</div>
					)}
				</Draggable>
			))}
		</div>
	);
};

export default WidgetDashboard;
