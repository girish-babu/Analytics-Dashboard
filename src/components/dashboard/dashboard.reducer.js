import { DATE_RANGE_UPDATED, defaultDateRange } from "./dashboard.const";

const initialState = {
	dateRange: defaultDateRange,
};

export default dashboardReducer = (state = initialState, action) => {
	switch (action.type) {
		case DATE_RANGE_UPDATED:
			return {
				...state,
				dateRange: action.payload,
			};
		default:
			return state;
	}
};
