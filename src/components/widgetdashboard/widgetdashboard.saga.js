import { put, select, takeLatest } from "redux-saga/effects";
import {
	FETCH_ALL_DATA,
	FETCH_ORDERS_BY_ITEM,
	FETCH_ORDERS_BY_STATUS,
	FETCH_ORDERS_BY_STATUS_QUERY_URL,
	FETCH_ORDERS_GROUP_BY_ITEM_QUERY_URL,
	FETCH_TOP_5_BRANCHES,
	FETCH_TOP_5_BRANCHES_QUERY,
	ORDER_BY_ITEM,
	ORDER_BY_STATUS,
	TOP_5_BRANCHES,
} from "./widgetdashboard.const";
import {
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
import { parsePayloadAndPrepare } from "./widgetdashboard.helpers";

function* fetchOrdersByItemSaga({ payload }) {
	console.log("Inside fetchOrdersByItemSaga...");

	try {
		const response = yield fetch(
			`${FETCH_ORDERS_GROUP_BY_ITEM_QUERY_URL}?startDate=${payload.startDate}&endDate=${payload.endDate}`
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

function* fetchOrdersByStatusSaga({ payload }) {
	console.log("Inside fetchOrdersByBranchSaga...");

	try {
		const response = yield fetch(
			`${FETCH_ORDERS_BY_STATUS_QUERY_URL}?startDate=${payload.startDate}&endDate=${payload.endDate}`
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

function* fetchTopFiveBranchesSaga({ payload }) {
	console.log("Inside fetchTopFiveBranchesSaga...");

	try {
		const response = yield fetch(
			`${FETCH_TOP_5_BRANCHES_QUERY}?startDate=${payload.startDate}&endDate=${payload.endDate}`
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

function* fetchAllChartsData({ payload }) {
	yield put(setLoadingTrue());
	yield put(fetchOrdersByStatus(payload));
	yield put(fetchOrdersByItem(payload));
	yield put(fetchTopFiveBranches(payload));
}

function* widgetDashboardSaga() {
	yield takeLatest(FETCH_ALL_DATA, fetchAllChartsData);
	yield takeLatest(FETCH_ORDERS_BY_ITEM, fetchOrdersByItemSaga);
	yield takeLatest(FETCH_ORDERS_BY_STATUS, fetchOrdersByStatusSaga);
	yield takeLatest(FETCH_TOP_5_BRANCHES, fetchTopFiveBranchesSaga);
}

export default widgetDashboardSaga;
