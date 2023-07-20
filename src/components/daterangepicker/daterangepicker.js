import React from "react";
import { useDispatch } from "react-redux";
import Datepicker from "react-tailwindcss-datepicker";
import { updateDateRangeAction } from "../dashboard/dashboard.actions";

const DateRangePicker = (props) => {
	const dispatch = useDispatch();
	return (
		<div data-testid="date-range-picker">
			<Datepicker
				value={props.dateRange}
				onChange={(newValue) =>
					dispatch(updateDateRangeAction(newValue))
				}
				showFooter={true}
				configs={{
					footer: {
						cancel: "Cancel",
						apply: "Apply",
					},
				}}
			/>
		</div>
	);
};

export default DateRangePicker;
