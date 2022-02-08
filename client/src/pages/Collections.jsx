import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Collections() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:3022/store/product");
				if (response && response.data) {
					setProducts(response.data);
				}
			} catch (err) {
				// Not in 200 response range
				if (err.response) {
					console.log(err.response.data);
					console.log(err.response.status);
					console.log(err.response.headers);
				} else {
					console.log(`Error: ${err.message}`);
				}
			}
		};
		fetchData();
	}, []);

	return (
		<div>
			<h1>Collection Page</h1>
			{products.map((item) => (
				<p key={item.id}>{item.name}</p>
			))}
		</div>
	);
}
