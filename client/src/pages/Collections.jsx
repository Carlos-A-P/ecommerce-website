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
			{products.map((item) => {
				const altDesc = `Image for ${item.name}`
				return (
					<div key={item.id}>
						<div style={{marginLeft: '50px'}}>
							<img style={{ width: '200px' }} src={item.images[0]} alt={altDesc} />
							<p>{item.name} by {item.brand} for a low price of ${item.price}. Product is for {item.sex}</p>
							<p>available prices are: </p>
							<ul style={{marginLeft: '40px'}}>
								{item.sizes.map((product, index) => {
									return (
									<li key={index}>
										{product.size} : {product.stock}
									</li>
									)})}
							</ul>
							<p>{item.description}</p>
							<ul style={{marginLeft: '40px'}}>
								{item.details.map((detail, index) => {
									return (
									<li key={index}>
										{detail}
									</li>
									)})}
							</ul>
						</div>
						<hr style={{ margin: '30px 0'}} />
					</div>
				)
			})}
		</div>
	);
}
