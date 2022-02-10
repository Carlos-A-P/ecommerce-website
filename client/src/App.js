import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Store from "./pages/Store";
import LandingPage from "./pages/LandingPage";
import Hero from "./pages/Hero";
import Collections from "./pages/Collections";
import MensPage from "./pages/MensPage";
import WomensPage from "./pages/WomensPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AddItem from "./pages/AddItem";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="*" element={<ErrorPage />} />
					<Route
						path="/store"
						element={<Navigate to="collections" replace />}
					/>
					<Route path="/" exact element={<LandingPage />} />
					<Route path="store" element={<Store />}>
						<Route path={`collections`} element={<Collections />} />
						<Route path={`men`} element={<MensPage />} />
						<Route path={`women`} element={<WomensPage />} />
						<Route path={`about`} element={<About />} />
						<Route path={`contact`} element={<Contact />} />
						<Route path={`hero`} element={<Hero />} />
						<Route path={`add_item`} element={<AddItem />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
