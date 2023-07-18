import { put, select, takeLatest } from "redux-saga/effects";
import {
	FETCH_ALL_DATA,
	FETCH_ORDERS_BY_GRANULARITY_QUERY,
	FETCH_ORDERS_BY_ITEM,
	FETCH_ORDERS_BY_STATUS,
	FETCH_ORDERS_BY_STATUS_QUERY_URL,
	FETCH_ORDERS_GROUP_BY_ITEM_QUERY_URL,
	FETCH_TOP_5_BRANCHES,
	FETCH_TOP_5_BRANCHES_QUERY,
	ORDER_BY_ITEM,
	ORDER_BY_STATUS,
	TIME_SERIES_DATA,
	TOP_5_BRANCHES,
} from "./widgetdashboard.const";
import {
	fetchOrdersByGranularityError,
	fetchOrdersByGranularitySuccess,
	fetchOrdersByItem,
	fetchOrdersByItemError,
	fetchOrdersByItemSuccess,
	fetchOrdersByStatus,
	fetchOrdersByStatusError,
	fetchOrdersByStatusSuccess,
	fetchTopFiveBranches,
	fetchTopFiveBranchesError,
	fetchTopFiveBranchesSuccess,
	setLoadingTrue,
	setTimeSeriesDataLoading,
} from "./widgetdashboard.actions";
import {
	parsePayloadAndPrepare,
	parseTimeseriesPayloadAndPrepare,
} from "./widgetdashboard.helpers";
import {
	APPLY_FILTER_AND_FETCH,
	FETCH_TIME_SERIES_DATA,
	NONE,
} from "../Widget/widget.const";
import { fetchTimeSeriesData } from "../Widget/widget.actions";

function* fetchOrdersByItemSaga() {
	try {
		const { dateRange } = yield select((state) => state.dashboard);
		const response = yield fetch(
			`${FETCH_ORDERS_GROUP_BY_ITEM_QUERY_URL}?startDate=${dateRange.startDate}&endDate=${dateRange.endDate}`
		);
		const responseJson = yield response.json();

		yield put(
			fetchOrdersByItemSuccess(
				parsePayloadAndPrepare(responseJson, ORDER_BY_ITEM)
			)
		);
	} catch (error) {
		console.log(error);
		yield put(fetchOrdersByItemError());
	}
}

function* fetchOrdersByStatusSaga() {
	try {
		const { dateRange } = yield select((state) => state.dashboard);
		const response = yield fetch(
			`${FETCH_ORDERS_BY_STATUS_QUERY_URL}?startDate=${dateRange.startDate}&endDate=${dateRange.endDate}`
		);
		const responseJson = yield response.json();

		yield put(
			fetchOrdersByStatusSuccess(
				parsePayloadAndPrepare(responseJson, ORDER_BY_STATUS)
			)
		);
	} catch (error) {
		console.log(error);
		yield put(fetchOrdersByStatusError());
	}
}

function* fetchTopFiveBranchesSaga() {
	try {
		const { dateRange } = yield select((state) => state.dashboard);
		const response = yield fetch(
			`${FETCH_TOP_5_BRANCHES_QUERY}?startDate=${dateRange.startDate}&endDate=${dateRange.endDate}`
		);
		const responseJson = yield response.json();

		yield put(
			fetchTopFiveBranchesSuccess(
				parsePayloadAndPrepare(responseJson, TOP_5_BRANCHES)
			)
		);
	} catch (error) {
		console.log(error);
		yield put(fetchTopFiveBranchesError());
	}
}

function* fetchOrdersByGranularitySaga({ payload }) {
	try {
		const { dateRange } = yield select((state) => state.dashboard);
		const [{ chartSelected, selectedGranularity }] = yield select((state) =>
			state.widgetDashboard.filter(
				(item) => item.name === TIME_SERIES_DATA
			)
		);

		let queryURL = `${FETCH_ORDERS_BY_GRANULARITY_QUERY}?startDate=${dateRange.startDate}&endDate=${dateRange.endDate}&granularity=${selectedGranularity}`;

		if (payload) {
			const { order_status, item_type } = payload;
			if (order_status != NONE) {
				queryURL = `${queryURL}&order_status=${order_status}`;
			}

			if (item_type != NONE) {
				queryURL = `${queryURL}&item_type=${item_type}`;
			}
		}

		const response = yield fetch(queryURL);
		const responseJson = yield response.json();
		yield put(
			fetchOrdersByGranularitySuccess(
				parseTimeseriesPayloadAndPrepare(
					responseJson,
					chartSelected,
					selectedGranularity
				)
			)
		);
	} catch (error) {
		console.log(error);
		yield put(fetchOrdersByGranularityError());
	}
}

function* fetchAllChartsData() {
	yield put(setLoadingTrue());
	yield put(fetchOrdersByStatus());
	yield put(fetchOrdersByItem());
	yield put(fetchTopFiveBranches());
	yield put(fetchTimeSeriesData());
}

function* widgetDashboardSaga() {
	yield takeLatest(FETCH_ALL_DATA, fetchAllChartsData);
	yield takeLatest(FETCH_ORDERS_BY_ITEM, fetchOrdersByItemSaga);
	yield takeLatest(FETCH_ORDERS_BY_STATUS, fetchOrdersByStatusSaga);
	yield takeLatest(FETCH_TOP_5_BRANCHES, fetchTopFiveBranchesSaga);
	yield takeLatest(FETCH_TIME_SERIES_DATA, fetchOrdersByGranularitySaga);
	yield takeLatest(APPLY_FILTER_AND_FETCH, fetchOrdersByGranularitySaga);
}

export default widgetDashboardSaga;
