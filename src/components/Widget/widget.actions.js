import * as actions from "./widget.const";

export const fetchTimeSeriesData = (payload) => ({
	type: actions.FETCH_TIME_SERIES_DATA,
	payload,
});

export const updateSelectedGranularity = (payload) => ({
	type: actions.UPDATE_SELECTED_GRANULARITY,
	payload,
});

export const updateChartSelection = (payload) => ({
	type: actions.UPDATE_CHART_SELECTION,
	payload,
});

export const applyFilterAndFetch = (payload) => ({
	type: actions.APPLY_FILTER_AND_FETCH,
	payload,
});
