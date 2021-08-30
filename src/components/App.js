import Main from "./sectioning/Main/Main";

const { Route, Switch } = require("react-router-dom");
const { default: Header } = require("./sectioning/Header/Header");

function App() {
	return (
		<>
			<Header />
			<Main>
				<Switch>
					<Route path="/cart"></Route>
				</Switch>
			</Main>
		</>
	);
}

export default App;
