import { BAR_CHART, TIME_SERIES } from "../Widget/widget.const";

export const HOUR = "HOUR";
export const DAY = "DAY";
export const WEEK = "WEEK";
export const MONTH = "MONTH";

export const ORDERS_COUNT = "Orders Count";
export const TOTAL_VALUE = "Total Value";

export const ORDER_BY_ITEM = "ORDER_BY_ITEM";
export const ORDER_BY_STATUS = "ORDER_BY_STATUS";
export const TOP_5_BRANCHES = "TOP_5_BRANCHES";
export const ORDERS_BY_HOUR = "ORDERS_BY_HOUR";
export const ORDERS_BY_DAY = "ORDERS_BY_DAY";
export const ORDERS_BY_WEEK = "ORDERS_BY_WEEK";
export const ORDERS_BY_MONTH = "ORDERS_BY_MONTH";
export const TIME_SERIES_DATA = "TIME_SERIES_DATA";

export const UPDATE_DASHBOARD = "UPDATE_DASHBOARD";
export const FETCH_ALL_DATA = "FETCH_ALL_DATA";
export const FETCH_ORDERS_BY_ITEM = "FETCH_ORDERS_BY_ITEM";
export const FETCH_ORDERS_BY_ITEM_SUCCESS = "FETCH_ORDERS_BY_ITEM_SUCCESS";
export const FETCH_ORDERS_BY_ITEM_ERROR = "FETCH_ORDERS_BY_ITEM_ERROR";
export const FETCH_ORDERS_BY_STATUS = "FETCH_ORDERS_BY_STATUS";
export const FETCH_ORDERS_BY_STATUS_SUCCESS = "FETCH_ORDERS_BY_STATUS_SUCCESS";
export const FETCH_ORDERS_BY_STATUS_ERROR = "FETCH_ORDERS_BY_STATUS_ERROR";
export const FETCH_TOP_5_BRANCHES = "FETCH_TOP_5_BRANCHES";
export const FETCH_TOP_5_BRANCHES_SUCCESS = "FETCH_TOP_5_BRANCHES_SUCCESS";
export const FETCH_TOP_5_BRANCHES_ERROR = "FETCH_TOP_5_BRANCHES_ERROR";
export const FETCH_ORDERS_BY_GRANULARITY = "FETCH_ORDERS_BY_GRANULARITY";
export const FETCH_ORDERS_BY_GRANULARITY_SUCCESS =
	"FETCH_ORDERS_BY_GRANULARITY_SUCCESS";
export const FETCH_ORDERS_BY_GRANULARITY_ERROR =
	"FETCH_ORDERS_BY_GRANULARITY_ERROR";
export const SET_LOADING_TRUE = "SET_LOADING_TRUE";
export const SET_TIME_SERIES_LOADING_TRUE = "SET_TIME_SERIES_LOADING_TRUE";

export const FETCH_ORDERS_GROUP_BY_ITEM_QUERY_URL =
	"http://localhost:3010/order-item/group-by/item";

export const FETCH_ORDERS_BY_STATUS_QUERY_URL =
	"http://localhost:3010/orders/group-by/status";

export const FETCH_TOP_5_BRANCHES_QUERY =
	"http://localhost:3010/orders/group-by/branch";

export const FETCH_ORDERS_BY_GRANULARITY_QUERY =
	"http://localhost:3010/orders/group-by/time";

export const WIDGET_DASHBOARD_INITIAL_STATE = [
	{
		id: 1,
		name: TIME_SERIES_DATA,
		labels: [],
		data: [],
		type: TIME_SERIES,
		loading: false,
		supportsGranularity: true,
		granularityOptions: [
			{
				label: HOUR,
				value: HOUR,
			},
			{
				label: DAY,
				value: DAY,
			},
			{
				label: WEEK,
				value: WEEK,
			},
			{
				label: MONTH,
				value: MONTH,
			},
		],
		selectedGranularity: MONTH,
		chartSelected: ORDERS_COUNT,
	},
	{
		id: 2,
		name: ORDER_BY_ITEM,
		labels: [],
		data: [],
		type: BAR_CHART,
		loading: true,
		supportsGranularity: false,
		granularityOptions: [],
		selectedGranularity: "",
	},
	{
		id: 3,
		name: ORDER_BY_STATUS,
		labels: [],
		data: [],
		type: BAR_CHART,
		loading: true,
		supportsGranularity: false,
		granularityOptions: [],
		selectedGranularity: "",
	},
	{
		id: 4,
		name: TOP_5_BRANCHES,
		labels: [],
		data: [],
		type: BAR_CHART,
		loading: true,
		supportsGranularity: false,
		granularityOptions: [],
		selectedGranularity: "",
	},
];
