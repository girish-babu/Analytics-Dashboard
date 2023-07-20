import * as actions from "./widgetdashboard.const";

export const fetchAllData = () => ({
	type: actions.FETCH_ALL_DATA,
});

export const setLoadingTrue = () => ({
	type: actions.SET_LOADING_TRUE,
});

export const setTimeSeriesDataLoading = () => ({
	type: actions.SET_TIME_SERIES_LOADING_TRUE,
});

export const fetchOrdersByItem = (payload) => ({
	type: actions.FETCH_ORDERS_BY_ITEM,
	payload,
});

export const fetchOrdersByItemSuccess = (payload) => ({
	type: actions.FETCH_ORDERS_BY_ITEM_SUCCESS,
	payload,
});

export const fetchOrdersByItemError = () => ({
	type: actions.FETCH_ORDERS_BY_ITEM_ERROR,
});

export const fetchOrdersByStatus = (payload) => ({
	type: actions.FETCH_ORDERS_BY_STATUS,
	payload,
});

export const fetchOrdersByStatusSuccess = (payload) => ({
	type: actions.FETCH_ORDERS_BY_STATUS_SUCCESS,
	payload,
});

export const fetchOrdersByStatusError = () => ({
	type: actions.FETCH_ORDERS_BY_STATUS_ERROR,
});

export const fetchTopFiveBranches = (payload) => ({
	type: actions.FETCH_TOP_5_BRANCHES,
	payload,
});

export const fetchTopFiveBranchesSuccess = (payload) => ({
	type: actions.FETCH_TOP_5_BRANCHES_SUCCESS,
	payload,
});

export const fetchTopFiveBranchesError = () => ({
	type: actions.FETCH_TOP_5_BRANCHES_ERROR,
});

export const fetchOrdersByGranularity = (payload) => ({
	type: actions.FETCH_ORDERS_BY_GRANULARITY,
	payload,
});

export const fetchOrdersByGranularitySuccess = (payload) => ({
	type: actions.FETCH_ORDERS_BY_GRANULARITY_SUCCESS,
	payload,
});

export const fetchOrdersByGranularityError = () => ({
	type: actions.FETCH_ORDERS_BY_GRANULARITY_ERROR,
});

export const updateDashboard = (payload) => ({
	type: actions.UPDATE_DASHBOARD,
	payload,
});
