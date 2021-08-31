import Box from "./components/layout/Box";
import Center from "./components/layout/Center";
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
					<Route exact path="/">
						<Center style={{ height: "90vh", width: "50%" }}>
							<Box style={{ fontSize: "2em" }}>
								Hello 👋! Before taking a look at my implementation of the cart, please take some time
								and look at the{" "}
								<a
									rel="noreferrer"
									target="_blank"
									style={{ textDecoration: "underline" }}
									href="https://github.com/SamyZog/optimax-test#readme"
								>
									README
								</a>{" "}
								section of this repo to have a better outlook.
							</Box>
						</Center>
					</Route>
				</Switch>
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
