import { useDispatch } from "react-redux";
import Datepicker from "react-tailwindcss-datepicker";
import { updateDateRangeAction } from "../dashboard/dashboard.actions";

const DateRangePicker = (props) => {
	const dispatch = useDispatch();
	return (
		<Datepicker
			value={props.dateRange}
			onChange={(newValue) => dispatch(updateDateRangeAction(newValue))}
			showFooter={true}
			configs={{
				footer: {
					cancel: "Cancel",
					apply: "Apply",
				},
			}}
		/>
	);
};

export default DateRangePicker;
