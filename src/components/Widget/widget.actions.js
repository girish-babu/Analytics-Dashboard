import {
	FETCH_TIME_SERIES_DATA,
	UPDATE_CHART_SELECTION,
	UPDATE_SELECTED_GRANULARITY,
} from "./widget.const";

export const fetchTimeSeriesData = (payload) => ({
	type: FETCH_TIME_SERIES_DATA,
	payload,
});

export const updateSelectedGranularity = (payload) => ({
	type: UPDATE_SELECTED_GRANULARITY,
	payload,
});

export const updateChartSelection = (payload) => ({
	type: UPDATE_CHART_SELECTION,
	payload,
});
