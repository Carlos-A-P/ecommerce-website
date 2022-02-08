import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import Collections from "./pages/Collections";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Collections />} />
					<Route path="/Hero" exact element={<Hero />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
