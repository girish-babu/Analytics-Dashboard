import { BAR_CHART } from "../components/Widget/widget.const";
import {
	FETCH_ALL_DATA,
	FETCH_ORDERS_BY_ITEM_SUCCESS,
	FETCH_ORDERS_BY_STATUS_SUCCESS,
	FETCH_TOP_5_BRANCHES_SUCCESS,
	ORDER_BY_ITEM,
	ORDER_BY_STATUS,
	SET_LOADING_TRUE,
	TOP_5_BRANCHES,
} from "../components/widgetdashboard/widgetdashboard.const";

const initialState = [
	{
		label: ORDER_BY_ITEM,
		labels: [],
		data: [],
		type: BAR_CHART,
		loading: true,
	},
	{
		label: ORDER_BY_STATUS,
		labels: [],
		data: [],
		type: BAR_CHART,
		loading: true,
	},
	{
		label: TOP_5_BRANCHES,
		labels: [],
		data: [],
		type: BAR_CHART,
		loading: true,
	},
];

export default widgetDashboardReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOADING_TRUE:
			console.log("Inside reducer...");
			return state.map((chart) => {
				return {
					...chart,
					loading: true,
				};
			});
		case FETCH_ORDERS_BY_ITEM_SUCCESS:
			return state.map((item) => {
				if (item.label === ORDER_BY_ITEM) {
					return {
						...item,
						labels: action.payload.labels,
						data: action.payload.data,
						loading: false,
					};
				}
				return item;
			});
		case FETCH_ORDERS_BY_STATUS_SUCCESS:
			return state.map((item) => {
				if (item.label === ORDER_BY_STATUS) {
					return {
						...item,
						labels: action.payload.labels,
						data: action.payload.data,
						loading: false,
					};
				}
				return item;
			});
		case FETCH_TOP_5_BRANCHES_SUCCESS:
			return state.map((item) => {
				if (item.label === TOP_5_BRANCHES) {
					return {
						...item,
						labels: action.payload.labels,
						data: action.payload.data,
						loading: false,
					};
				}
				return item;
			});
		default:
			return state;
	}
};
