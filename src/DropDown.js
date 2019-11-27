import React from 'react';
import DropDownOptions from './DropDownOptions';

const DropDown = ({ people, cldd }) => {
	return(
		<div>
			<select onClick={ cldd }>
			<option>Select your character</option>
			{people && 
				people.map((person, i) => {
					return(
						<DropDownOptions name = { people[i].name } key = {i} />	
					)	
				})			
			}
			</select>
		</div>
	)
}

export default DropDown;