const QUERY_TO_LABEL_MAPPING = {
	ORDER_BY_ITEM: "item_name",
	ORDER_BY_STATUS: "order_status",
	TOP_5_BRANCHES: "branch_name",
};

const QUERY_TO_DATA_MAPPING = {
	ORDER_BY_ITEM: "order_count",
	ORDER_BY_STATUS: "count",
	TOP_5_BRANCHES: "branch_collections",
};

export const parsePayloadAndPrepare = (payload, type) => {
	const labels = [];
	const data = [];
	const label_param = QUERY_TO_LABEL_MAPPING[type];
	const data_param = QUERY_TO_DATA_MAPPING[type];

	for (let item of payload) {
		labels.push(item[label_param]);
		data.push(item[data_param]);
	}

	return {
		labels,
		data,
	};
};
