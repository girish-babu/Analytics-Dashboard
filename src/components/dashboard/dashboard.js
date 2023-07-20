import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { defaultDateRange } from "./dashboard.const";
import WidgetDashboard from "../widgetdashboard/widgetdashboard";
import DateRangePicker from "../daterangepicker/daterangepicker";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { updateDashboard } from "../widgetdashboard/widgetdashboard.actions";

import "./dashboard.css";

const Dashboard = () => {
	const dashboardState = useSelector((state) => state.dashboard);
	const widgetDashboardState = useSelector((state) => state.widgetDashboard);
	const dispatch = useDispatch();

	const onDragEnd = (result) => {
		const { source, destination } = result;

		if (!destination) {
			return;
		}

		if (source.index === destination.index) {
			return;
		}

		const newDashboardState = Array.from(widgetDashboardState);
		const movedItem = newDashboardState[source.index];
		newDashboardState.splice(source.index, 1);
		newDashboardState.splice(destination.index, 0, movedItem);
		dispatch(updateDashboard(newDashboardState));
	};

	return (
		<div className="min-h-full">
			<header className="bg-white shadow">
				<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 header">
					<DateRangePicker
						dateRange={
							dashboardState?.dateRange
								? dashboardState.dateRange
								: defaultDateRange
						}
					/>
				</div>
			</header>
			<main>
				<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
					<DragDropContext onDragEnd={onDragEnd}>
						<Droppable droppableId="widget-dashboard-droppable">
							{(provided) => (
								<div
									ref={provided.innerRef}
									{...provided.droppableProps}
								>
									<WidgetDashboard
										dateRange={dashboardState.dateRange}
									/>
									{provided.placeholder}
								</div>
							)}
						</Droppable>
					</DragDropContext>
				</div>
			</main>
		</div>
	);
};

export default Dashboard;
