import React from "react";
import ReactDOM from "react-dom";
import { Provider as StoreProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import store from "./store/rootReducer";
import "./styles/main.scss";

ReactDOM.render(
	<React.StrictMode>
		<StoreProvider store={store}>
			<Router>
				<App />
			</Router>
		</StoreProvider>
	</React.StrictMode>,
	document.getElementById("root"),
);
