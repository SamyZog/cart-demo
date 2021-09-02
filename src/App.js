import Main from "./components/sectioning/Main/Main";
import Cartpage from "./routes/Cartpage/Cartpage";

const { Route, Switch } = require("react-router-dom");
const { default: Header } = require("./components/sectioning/Header/Header");

function App() {
	return (
		<>
			<Header />
			<Main>
				<Switch>
					<Route path="/cart">
						<Cartpage />
					</Route>
				</Switch>
			</Main>
		</>
	);
}

export default App;
