import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
	return (
		<div>
			<h1>Landing Page</h1>
			<Link to="store/collections">Collections Page</Link>
		</div>
	);
}
