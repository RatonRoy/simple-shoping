import React from 'react';
import './Props.css';
const Props = () => {
	return (
		<div className='container'>
			<h1 className='title'> Difference Between Props and State </h1>
			<div className="wrap-answer">
				<div className="props">
					<h3> Props </h3>
					<ul>
						<li>Props are immutable.</li>
						<li> Props allow you to pass data from one component to other components as an argument.</li>
						<li> Props are used to communicate between components.</li>
						<li>Props get initial value from parent Component.</li>
						<li> Props Can change in child Components</li>
					</ul>
				</div>
			
			{/* end of the props */}
			<div className="state">
				<h3> State </h3>
				<ul>
					<li>State is mutable</li>
					<li> State holds information about the components.</li>
					<li> States can be used for rendering dynamic changes with the component.</li>
					<li> State changes can be asynchronous.</li>
					<li> State Can change inside Component</li>
				</ul>
			 </div>
			</div>
		</div>
	);
};

export default Props;