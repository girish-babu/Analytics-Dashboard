import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./src/store";

const root = ReactDom.createRoot(document.getElementById("app"));

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
