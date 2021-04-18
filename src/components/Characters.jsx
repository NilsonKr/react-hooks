import React, { useState, useEffect } from 'react';

import '../styles/Characters.css';

const urlApi = 'http://rickandmortyapi.com/api/character/?page=1';

const Characters = () => {
	const [characters, setCharacters] = useState({ results: [] });

	useEffect(() => {
		fetch(urlApi)
			.then(data => data.json())
			.then(data => setCharacters(data))
			.catch(err => console.log(err.message));
	}, []);

	const showMore = () => {
		fetch(characters.info.next)
			.then(data => data.json())
			.then(data =>
				setCharacters({ ...data, results: [...characters.results, ...data.results] })
			)
			.catch(err => console.log(err.message));
	};

	return (
		<div className='characters'>
			<div className='characters__container'>
				{characters.results.map(item => (
					<div className='item' key={item.id}>
						<img src={item.image} alt='' />
						<div className='item--info'>
							<h2>{item.name}</h2>
							<p>{item.status}</p>
							<em>{item.species}</em>
						</div>
					</div>
				))}
			</div>
			<button className='more' onClick={showMore}>
				MORE...
			</button>
		</div>
	);
};

export default Characters;
