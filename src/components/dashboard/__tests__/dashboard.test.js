import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render } from "@testing-library/react";
import Dashboard from "../dashboard";
import { WIDGET_DASHBOARD_INITIAL_STATE } from "../../widgetdashboard/widgetdashboard.const";
import "@testing-library/jest-dom/extend-expect";

const mockStore = configureStore([]);
const store = mockStore({
	dashboard: {
		dateRange: {
			startDate: "2023-03-01",
			endDate: "2023-06-30",
		},
	},
	widgetDashboard: WIDGET_DASHBOARD_INITIAL_STATE,
});

describe("<Dashboard />", () => {
	test("DateRangePicker should be rendered", () => {
		const { getByTestId } = render(
			<Provider store={store}>
				<Dashboard />
			</Provider>
		);

		const dataRangePicker = getByTestId("widget-dashboard");
		expect(dataRangePicker).toBeInTheDocument();
		expect(dataRangePicker.firstChild).toBeTruthy();
	});

	test("Widget dashboard should be rendered", () => {
		const { container, getByTestId } = render(
			<Provider store={store}>
				<Dashboard />
			</Provider>
		);

		const widgetDashboard = getByTestId("widget-dashboard");
		expect(widgetDashboard).toBeInTheDocument();
	});
});
