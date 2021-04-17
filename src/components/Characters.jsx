import React, { useState, useEffect } from 'react';

const Characters = () => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		fetch('http://rickandmortyapi.com/api/character')
			.then(data => data.json())
			.then(data => setCharacters(data.results))
			.catch(err => console.log(err.message));
	}, []);

	return (
		<div>
			{characters.map(item => (
				<h2 key={item.id}>{item.name}</h2>
			))}
		</div>
	);
};

export default Characters;
