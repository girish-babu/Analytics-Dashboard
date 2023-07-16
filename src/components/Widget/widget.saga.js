import { put, select, takeLatest } from "redux-saga/effects";
import { FETCH_TIME_SERIES_DATA } from "./widget.const";

function* fetchTimeSeriesDataSaga({ payload }) {
	console.log("Inside fetchTimeSeriesDataSaga...");
	try {
		const response = yield fetch(
			`${FETCH_ORDERS_BY_GRANULARITY_QUERY}?startDate=${payload.startDate}&endDate=${payload.endDate}&granularity=${MONTH}`
		);
		const responseJson = yield response.json();
		console.log(parsePayloadAndPrepare(responseJson, ORDERS_BY_MONTH));
		yield put(
			fetchOrdersByGranularitySuccess(
				parsePayloadAndPrepare(responseJson, ORDERS_BY_MONTH)
			)
		);
	} catch (error) {}
}

function* widgetSaga() {
	yield takeLatest(FETCH_TIME_SERIES_DATA, fetchTimeSeriesDataSaga);
}

export default widgetSaga;
