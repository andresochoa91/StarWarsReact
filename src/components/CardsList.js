import React from 'react';
import Cards from './Cards';

const CardsList = ({ people }) => {
	return(
		<div>
			{people && 
				people.map((person, i) => {
					return(
						<Cards person = { people[i] } key = {i} />	
					)	
				})			
			}
		</div>
	)
}

export default CardsList;