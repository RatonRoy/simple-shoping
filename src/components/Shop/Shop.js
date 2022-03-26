import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	useEffect(() => {
		fetch('fakeData.json')
			.then(res => res.json())
			.then(data => setProducts(data))
	}, [])
	const addToChart = (product) => {
		console.log(product);
		const newChart = [...cart, product];
		setCart(newChart);
	}
	return (
		<div className="shop-wrapper">
			<h1 className="product-title">Our Bags</h1>
			<div className='shop-container'>
				<div className="product-container">
					{
						products.map(product => <Product
							product={product} key={product.id}
						    addToChart = {addToChart}></Product>)
					}
				</div>
				<div className="chart-order">
					<div className="cart-container">
						<h3>Select One Thing</h3>	
						<h4>Selected Items : {cart.length}</h4>
					</div>
						
				</div> 
		</div>
		</div>
	);
};

export default Shop;