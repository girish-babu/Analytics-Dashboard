import widgetSaga from "../components/Widget/widget.saga";
import widgetDashboardSaga from "../components/widgetdashboard/widgetdashboard.saga";

export default function* rootSaga() {
	yield [widgetDashboardSaga(), widgetSaga()];
}
