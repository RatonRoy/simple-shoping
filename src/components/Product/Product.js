import React from 'react';
import './Product.css';

const Product = (props) => {
	const { name, img, price, ratings, seller } = props.product; 
	return (
		<div className='product'>
			<img src={img} alt="" srcset="" /> 
			<h4 className='product-name'>{name}</h4>
			<div className="product-info">
				<p>Price : $ {price}</p>
				<p>Seller : {seller}</p>
				<p>Rating : {ratings} Star</p>
			</div>
			<button className='chart-button'>
				<p>Add To Chart </p>
			</button>
		</div>
	);
};

export default Product;