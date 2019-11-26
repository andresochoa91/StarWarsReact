import React from 'react';
import ImagesCollection from './ImagesCollection';

const Cards = ({ person }) => {
	return(
		<div>
			<ImagesCollection person = {person.name}/>		
			<h1>{ person.name }</h1>
			<h2>{ person.height }</h2>
			<h2>{ person.eye_color }</h2>
			<h2>{ person.hair_color }</h2>
			<h2>{ person.skin_color }</h2>
			<h2>{ person.eye_color }</h2>
			<h2>{ person.birth_year }</h2>
			<h2>{ person.gender }</h2>
			<br/>
		</div>			
	)
}

export default Cards;