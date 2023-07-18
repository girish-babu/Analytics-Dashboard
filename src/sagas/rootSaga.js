import widgetDashboardSaga from "../components/widgetdashboard/widgetdashboard.saga";

export default function* rootSaga() {
	yield [widgetDashboardSaga()];
}
