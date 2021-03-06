import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = props => {
	const style = {
		'@media (min-width: 500px)': {
			width: '450px'
		}
	};
	return (
		<div className='Person' style={style}>
			<p>
				I'm {props.name} and I am {props.age} years old!
			</p>
			<button onClick={props.click} id='del'>
				x
			</button>

			<input type='text' onChange={props.changed} value={props.name} />
		</div>
	);
};

export default Radium(person);

//<button>Delete Button!</button>
