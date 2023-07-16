import { useSelector } from "react-redux";
import { defaultDateRange } from "./dashboard.const";
import WidgetDashboard from "../widgetdashboard/widgetdashboard";
import DateRangePicker from "../daterangepicker/daterangepicker";

import "./dashboard.css";

export default Dashboard = () => {
	const dashboardState = useSelector((state) => state.dashboard);

	return (
		<div className="min-h-full">
			<header className="bg-white shadow">
				<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 header">
					<DateRangePicker
						dateRange={
							dashboardState?.dateRange
								? dashboardState.dateRange
								: defaultDateRange
						}
					/>
				</div>
			</header>
			<main>
				<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
					<WidgetDashboard dateRange={dashboardState.dateRange} />
				</div>
			</main>
		</div>
	);
};
