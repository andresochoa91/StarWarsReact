import React from 'react';
import ImagesCollection from './ImagesCollection';

const Cards = ({ person }) => {
	return(
		<div>
			<ImagesCollection person = {person.name}/>		
			<h2>Name: { person.name }</h2>
			<h4>Height: { person.height }</h4>
			<h4>Hair color: { person.hair_color }</h4>
			<h4>Skin color: { person.skin_color }</h4>
			<h4>Eye color: { person.eye_color }</h4>
			<h4>Birthday: { person.birth_year }</h4>
			<h4>Gender: { person.gender }</h4>
			<br/>
		</div>			
	)
}

export default Cards;