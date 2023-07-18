const CREATED = "CREATED";
const SHIPPED = "SHIPPED";
const DELIVERED = "DELIVERED";
const CANCELLED = "CANCELLED";
export const NONE = "--NONE--";

export const BAR_CHART = "BAR_CHART";
export const PIE_CHART = "PIE_CHART";
export const TIME_SERIES = "TIME_SERIES";
export const ORDERS_COUNT = "Orders Count";
export const TOTAL_VALUE = "Total Value";
export const FETCH_TIME_SERIES_DATA = "FETCH_TIME_SERIES_DATA";
export const UPDATE_SELECTED_GRANULARITY = "UPDATE_SELECTED_GRANULARITY";
export const UPDATE_CHART_SELECTION = "UPDATE_CHART_SELECTION";
export const APPLY_FILTER_AND_FETCH = "APPLY_FILTER_AND_FETCH";

export const TIME_SERIES_OPTIONS = [
	{
		label: ORDERS_COUNT,
		value: ORDERS_COUNT,
	},
	{
		label: TOTAL_VALUE,
		value: TOTAL_VALUE,
	},
];

export const FILTER_TYPE_OPTIONS = [
	{
		label: CREATED,
		value: "created",
	},
	{
		label: SHIPPED,
		value: "shipped",
	},
	{
		label: DELIVERED,
		value: "delivered",
	},
	{
		label: CANCELLED,
		value: "cancelled",
	},
];

export const ITEM_TYPE_OPTIONS = [
	{
		label: NONE,
		value: NONE,
	},
	{
		label: "CAKE",
		value: "CAKE",
	},
	{
		label: "MUFFIN",
		value: "MUFFIN",
	},
	{
		label: "COOKIES",
		value: "COOKIES",
	},
];

export const MODAL_FILTER_OPTIONS = [
	{
		label: NONE,
		value: NONE,
	},
	{
		label: CREATED,
		value: CREATED,
	},
	{
		label: SHIPPED,
		value: SHIPPED,
	},
	{
		label: DELIVERED,
		value: DELIVERED,
	},
	{
		label: CANCELLED,
		value: CANCELLED,
	},
	,
];
