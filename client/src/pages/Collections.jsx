import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Collections() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get("/store/product");
			setProducts(data);
		};
		fetchData();
		console.log(products);
	}, []);

	// const displayFetch = () => {
	// 	fetch("/store/product/")
	// 		.then((response) => response.json())
	// 		.then((json) => console.log(json));
	// };
	return (
		<div>
			<h1>Collection Page</h1>
			{products.map((item) => (
				<p key={item.id}>{item.name}</p>
			))}
		</div>
	);
}
