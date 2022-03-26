import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
	// console.log(cart); 
	// const { name, setName } = useState([]);
	/* let Name
	for (const product of cart) {
		Name = product.name;
		selectProduct.push(Name);
	} */
	const clean = () => {
		cart.length = 0;
	}
	return (
		<div>
			<h3>Select One Thing</h3>	
			{/* <h4>Selected Items : {cart.length}</h4> */}
			<ul>
        		{cart.map((item) => ( 
					<li key={item.id}  className='select-product'>{item.name}</li>
				))}
			</ul>
			<button> Chosen One </button> <br />
			<button onClick={clean}> Select Again </button>
		</div>
	);
};

export default Cart;