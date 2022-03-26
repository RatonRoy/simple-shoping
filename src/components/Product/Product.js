import React from 'react';
import shoppingCart from './img/shoppingCart.svg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
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
			<button className='chart-button' onClick={() => props.addToChart(props.product)}>
				<p>Add To Chart </p>
				{/* <FontAwesomeIcon  icon={faCoffee}></FontAwesomeIcon> */}
				<img src={shoppingCart} alt="" />
				
			</button>
		</div>
	);
};

export default Product;