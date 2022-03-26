import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
	return (
		<div>
			<h3>Select One Thing</h3>	
			<h4>Selected Items : {cart.length}</h4>
		</div>
	);
};

export default Cart;