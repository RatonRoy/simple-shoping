import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch('fakeData.json')
			.then(res => res.json())
			.then(data => setProducts(data))
	},[])
	return (
		<div className="shop-wrapper">
			<h1 className="product-title">Our Bags</h1>
			<div className='shops-container'>
				<div className="product-container">
					{
						products.map(product => <Product
							product={product} key={product.id}
						    ></Product>)
					}
				</div>
				<div className="chart-order">
					<div className="cart-container">
						<h3>Select One Thing</h3>	
					</div>
						
				</div> 
		</div>
		</div>
	);
};

export default Shop;