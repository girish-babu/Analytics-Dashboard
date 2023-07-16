import { combineReducers } from "@reduxjs/toolkit";
import dashboardReducer from "../components/dashboard/dashboard.reducer";
import widgetDashboardReducer from "../components/widgetdashboard/widgetdashboard.reducer";

// Combine the reducers
const rootReducer = combineReducers({
	dashboard: dashboardReducer,
	widgetDashboard: widgetDashboardReducer,
});

export default rootReducer;
