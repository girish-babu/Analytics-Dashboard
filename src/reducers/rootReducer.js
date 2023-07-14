import { combineReducers } from "@reduxjs/toolkit";
import dashboardReducer from "./dashboardReducer";
import widgetDashboardReducer from "./widgetDashboardReducer";

// Combine the reducers
const rootReducer = combineReducers({
	dashboard: dashboardReducer,
	widgetDashboard: widgetDashboardReducer,
});

export default rootReducer;
