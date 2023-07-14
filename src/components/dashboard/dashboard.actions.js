import { FETCH_ALL_DATA } from "../widgetdashboard/widgetdashboard.const";
import { DATE_RANGE_UPDATED } from "./dashboard.const";

export const updateDateRangeAction = (payload) => ({
	type: DATE_RANGE_UPDATED,
	payload,
});

export const fetchAllData = () => ({
	type: FETCH_ALL_DATA,
});
