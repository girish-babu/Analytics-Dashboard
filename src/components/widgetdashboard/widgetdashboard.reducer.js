import {
	BAR_CHART,
	TIME_SERIES,
	UPDATE_CHART_SELECTION,
	UPDATE_SELECTED_GRANULARITY,
} from "../Widget/widget.const";
import * as consts from "./widgetdashboard.const";

const initialState = consts.WIDGET_DASHBOARD_INITIAL_STATE;

const widgetDashboardReducer = (state = initialState, action) => {
	switch (action.type) {
		case consts.SET_LOADING_TRUE:
			return state.map((chart) => {
				return {
					...chart,
					loading: true,
				};
			});
		case consts.SET_TIME_SERIES_LOADING_TRUE:
			return state.map((chart) => {
				if (chart.name === consts.TIME_SERIES_DATA) {
					return {
						...chart,
						loading: true,
					};
				}
				return chart;
			});
		case consts.UPDATE_DASHBOARD:
			return action.payload;
		case consts.FETCH_ORDERS_BY_ITEM_SUCCESS:
			return state.map((item) => {
				if (item.name === consts.ORDER_BY_ITEM) {
					return {
						...item,
						labels: action.payload.labels,
						data: action.payload.data,
						loading: false,
					};
				}
				return item;
			});
		case consts.FETCH_ORDERS_BY_STATUS_SUCCESS:
			return state.map((item) => {
				if (item.name === consts.ORDER_BY_STATUS) {
					return {
						...item,
						labels: action.payload.labels,
						data: action.payload.data,
						loading: false,
					};
				}
				return item;
			});
		case consts.FETCH_TOP_5_BRANCHES_SUCCESS:
			return state.map((item) => {
				if (item.name === consts.TOP_5_BRANCHES) {
					return {
						...item,
						labels: action.payload.labels,
						data: action.payload.data,
						loading: false,
					};
				}
				return item;
			});
		case consts.FETCH_ORDERS_BY_GRANULARITY_SUCCESS:
			return state.map((item) => {
				if (item.name === consts.TIME_SERIES_DATA) {
					return {
						...item,
						labels: action.payload.labels,
						data: action.payload.data,
						loading: false,
					};
				}
				return item;
			});
		case UPDATE_SELECTED_GRANULARITY:
			return state.map((item) => {
				if (item.name === consts.TIME_SERIES_DATA) {
					return {
						...item,
						selectedGranularity: action.payload,
					};
				}
				return item;
			});
		case UPDATE_CHART_SELECTION:
			return state.map((item) => {
				if (item.name === consts.TIME_SERIES_DATA) {
					return {
						...item,
						chartSelected: action.payload,
					};
				}
				return item;
			});
		default:
			return state;
	}
};

export default widgetDashboardReducer;
