import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render } from "@testing-library/react";
import WidgetDashboard from "../widgetdashboard";
import { defaultDateRange } from "../../dashboard/dashboard.const";
import { WIDGET_DASHBOARD_INITIAL_STATE } from "../widgetdashboard.const";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const mockStore = configureStore([]);
const store = mockStore({ widgetDashboard: WIDGET_DASHBOARD_INITIAL_STATE });

describe("<WidgetDashboard />", () => {
	test("Test WidgetDashboard rendering", () => {
		render(
			<Provider store={store}>
				<DragDropContext>
					<Droppable droppableId="droppable-id">
						{(provided) => (
							<div
								ref={provided.innerRef}
								{...provided.droppableProps}
							>
								<WidgetDashboard dateRange={defaultDateRange} />
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</Provider>
		);
	});

	test("Test WidgetDashboard rendering without errors and check count of widgets rendered", () => {
		const { getByTestId } = render(
			<Provider store={store}>
				<DragDropContext>
					<Droppable droppableId="droppable-id">
						{(provided) => (
							<div
								ref={provided.innerRef}
								{...provided.droppableProps}
							>
								<WidgetDashboard dateRange={defaultDateRange} />
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</Provider>
		);

		const widgetDashboard = getByTestId("widget-dashboard");

		expect(widgetDashboard.childElementCount).toBe(4);
	});
});
