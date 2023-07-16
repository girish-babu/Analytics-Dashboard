import {
	FETCH_ALL_DATA,
	FETCH_ORDERS_BY_GRANULARITY,
	FETCH_ORDERS_BY_GRANULARITY_ERROR,
	FETCH_ORDERS_BY_GRANULARITY_SUCCESS,
	FETCH_ORDERS_BY_ITEM,
	FETCH_ORDERS_BY_ITEM_ERROR,
	FETCH_ORDERS_BY_ITEM_SUCCESS,
	FETCH_ORDERS_BY_STATUS,
	FETCH_ORDERS_BY_STATUS_ERROR,
	FETCH_ORDERS_BY_STATUS_SUCCESS,
	FETCH_TOP_5_BRANCHES,
	FETCH_TOP_5_BRANCHES_ERROR,
	FETCH_TOP_5_BRANCHES_SUCCESS,
	SET_LOADING_TRUE,
} from "./widgetdashboard.const";

export const fetchAllData = () => ({
	type: FETCH_ALL_DATA,
});

export const setLoadingTrue = () => ({
	type: SET_LOADING_TRUE,
});

export const fetchOrdersByItem = (payload) => ({
	type: FETCH_ORDERS_BY_ITEM,
	payload,
});

export const fetchOrdersByItemSuccess = (payload) => ({
	type: FETCH_ORDERS_BY_ITEM_SUCCESS,
	payload,
});

export const fetchOrdersByItemError = () => ({
	type: FETCH_ORDERS_BY_ITEM_ERROR,
});

export const fetchOrdersByStatus = (payload) => ({
	type: FETCH_ORDERS_BY_STATUS,
	payload,
});

export const fetchOrdersByStatusSuccess = (payload) => ({
	type: FETCH_ORDERS_BY_STATUS_SUCCESS,
	payload,
});

export const fetchOrdersByStatusError = () => ({
	type: FETCH_ORDERS_BY_STATUS_ERROR,
});

export const fetchTopFiveBranches = (payload) => ({
	type: FETCH_TOP_5_BRANCHES,
	payload,
});

export const fetchTopFiveBranchesSuccess = (payload) => ({
	type: FETCH_TOP_5_BRANCHES_SUCCESS,
	payload,
});

export const fetchTopFiveBranchesError = () => ({
	type: FETCH_TOP_5_BRANCHES_ERROR,
});

export const fetchOrdersByGranularity = (payload) => ({
	type: FETCH_ORDERS_BY_GRANULARITY,
	payload,
});

export const fetchOrdersByGranularitySuccess = (payload) => ({
	type: FETCH_ORDERS_BY_GRANULARITY_SUCCESS,
	payload,
});

export const fetchOrdersByGranularityError = () => ({
	type: FETCH_ORDERS_BY_GRANULARITY_ERROR,
});
