import { put, select, takeLatest } from "redux-saga/effects";
import {
	DAY,
	FETCH_ALL_DATA,
	FETCH_ORDERS_BY_GRANULARITY,
	FETCH_ORDERS_BY_GRANULARITY_QUERY,
	FETCH_ORDERS_BY_ITEM,
	FETCH_ORDERS_BY_STATUS,
	FETCH_ORDERS_BY_STATUS_QUERY_URL,
	FETCH_ORDERS_GROUP_BY_ITEM_QUERY_URL,
	FETCH_TOP_5_BRANCHES,
	FETCH_TOP_5_BRANCHES_QUERY,
	MONTH,
	ORDERS_BY_MONTH,
	ORDER_BY_ITEM,
	ORDER_BY_STATUS,
	TIME_SERIES_DATA,
	TOP_5_BRANCHES,
} from "./widgetdashboard.const";
import {
	fetchOrdersByGranularity,
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
} from "./widgetdashboard.actions";
import {
	parsePayloadAndPrepare,
	parseTimeseriesPayloadAndPrepare,
} from "./widgetdashboard.helpers";
import { FETCH_TIME_SERIES_DATA } from "../Widget/widget.const";
import { fetchTimeSeriesData } from "../Widget/widget.actions";
import { TIME } from "../../../../Backend/src/routes/routesconst";

function* fetchOrdersByItemSaga() {
	console.log("Inside fetchOrdersByItemSaga...");

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
		yield put(fetchOrdersByItemError());
	}
}

function* fetchOrdersByStatusSaga() {
	console.log("Inside fetchOrdersByBranchSaga...");

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
		yield put(fetchOrdersByStatusError());
	}
}

function* fetchTopFiveBranchesSaga() {
	console.log("Inside fetchTopFiveBranchesSaga...");

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
		yield put(fetchTopFiveBranchesError());
	}
}

function* fetchOrdersByGranularitySaga() {
	console.log("Inside fetchOrdersByGranularitySaga...");

	try {
		const { dateRange } = yield select((state) => state.dashboard);
		const [{ chartSelected, selectedGranularity }] = yield select((state) =>
			state.widgetDashboard.filter(
				(item) => item.name === TIME_SERIES_DATA
			)
		);
		console.log(chartSelected, selectedGranularity);
		const response = yield fetch(
			`${FETCH_ORDERS_BY_GRANULARITY_QUERY}?startDate=${dateRange.startDate}&endDate=${dateRange.endDate}&granularity=${selectedGranularity}`
		);
		const responseJson = yield response.json();
		console.log(
			parseTimeseriesPayloadAndPrepare(
				responseJson,
				chartSelected,
				selectedGranularity
			)
		);
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
}

export default widgetDashboardSaga;
