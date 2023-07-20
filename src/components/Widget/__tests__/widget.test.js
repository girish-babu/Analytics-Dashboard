import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Widget from "../widget";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { WIDGET_DASHBOARD_INITIAL_STATE } from "../../widgetdashboard/widgetdashboard.const";
import "@testing-library/jest-dom/extend-expect";

const mockStore = configureStore([]);
const store = mockStore({});

describe("Widget component", () => {
	test("loading true", () => {
		const componentLoadingProps = {
			...WIDGET_DASHBOARD_INITIAL_STATE[1],
			loading: true,
		};

		const { container } = render(
			<Provider store={store}>
				<Widget {...componentLoadingProps} />
			</Provider>
		);

		const element = container.querySelector(".loader");
		expect(element).toBeInTheDocument();
	});

	test("bar chart with loading false", () => {
		const componentNotLoadingProps = {
			...WIDGET_DASHBOARD_INITIAL_STATE[1],
			loading: false,
		};
		const { container } = render(
			<Provider store={store}>
				<Widget {...componentNotLoadingProps} />
			</Provider>
		);

		const canvasElement = container.querySelector("canvas");
		expect(canvasElement).toBeInTheDocument();
	});

	test("time series chart with loading false", () => {
		const componentNotLoadingProps = {
			...WIDGET_DASHBOARD_INITIAL_STATE[0],
			loading: false,
		};
		const { container } = render(
			<Provider store={store}>
				<Widget {...componentNotLoadingProps} />
			</Provider>
		);

		const canvasElement = container.querySelector("canvas");
		expect(canvasElement).toBeInTheDocument();
	});

	test("time series chart with loading false, renders granularity options", () => {
		const componentNotLoadingProps = {
			...WIDGET_DASHBOARD_INITIAL_STATE[0],
			loading: false,
		};
		const { container } = render(
			<Provider store={store}>
				<Widget {...componentNotLoadingProps} />
			</Provider>
		);

		const element = container.querySelector(".granularity-options");
		expect(element).toBeInTheDocument();
	});

	test("time series chart with loading false, Renders buttons", () => {
		const { getByText } = render(
			<Provider store={store}>
				<Widget {...WIDGET_DASHBOARD_INITIAL_STATE[0]} />
			</Provider>
		);

		const applyFilterButton = getByText("Apply Filter");
		expect(applyFilterButton).toBeInTheDocument();

		const fetchDataButton = getByText("Fetch Data");
		expect(fetchDataButton).toBeInTheDocument();
	});

	test("time series chart with loading false, Renders buttons", () => {
		const { getByText } = render(
			<Provider store={store}>
				<Widget {...WIDGET_DASHBOARD_INITIAL_STATE[0]} />
			</Provider>
		);

		const applyFilterButton = getByText("Apply Filter");
		expect(applyFilterButton).toBeInTheDocument();

		const fetchDataButton = getByText("Fetch Data");
		expect(fetchDataButton).toBeInTheDocument();
	});

	test("time series chart with loading false, Clicking on Fetch Data", () => {
		const mockAction = jest.fn();
		mockAction.mockImplementation(() => ({
			type: "FETCH_TIME_SERIES_DATA",
			payload: {
				chartSelected: "Orders Count",
				selectedGranularity: "MONTH",
			},
		}));

		const { getByTestId } = render(
			<Provider store={store}>
				<Widget {...WIDGET_DASHBOARD_INITIAL_STATE[0]} />
			</Provider>
		);

		const button = getByTestId("fetch-data");
		fireEvent.click(button);

		expect(store.getActions()).toEqual([
			{
				type: "FETCH_TIME_SERIES_DATA",
				payload: {
					chartSelected: "Orders Count",
					selectedGranularity: "MONTH",
				},
			},
		]);
	});
});
