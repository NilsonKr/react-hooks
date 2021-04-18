import React, { useState, useEffect, useContext } from 'react';
import Context from '../context';

import Characters from './Characters';

import '../styles/Characters.css';

const urlApi = 'http://rickandmortyapi.com/api/character/?page=1';

const CharactersContainer = () => {
	const [characters, setCharacters] = useState({ results: [] });
	const { favorites, setFavorites } = useContext(Context);

	useEffect(() => {
		fetch(urlApi)
			.then(data => data.json())
			.then(data => setCharacters(data))
			.catch(err => console.log(err.message));
	}, []);

	//Show more characters
	const showMore = () => {
		fetch(characters.info.next)
			.then(data => data.json())
			.then(data =>
				//Concating Past characters and new characters
				setCharacters({ ...data, results: [...characters.results, ...data.results] })
			)
			.catch(err => console.log(err.message));
	};

	//Handle Favorite
	const handleFavorite = item => {
		const exists = favorites.find(favorite => favorite.id === item.id);

		if (exists) {
			alert('You already have this Item!');
			return;
		} else {
			setFavorites({ type: 'ADD_FAVORITE', payload: item });
		}
	};

	return (
		<div className='characters'>
			<Characters
				characters={characters.results}
				showMore={showMore}
				handleFavorite={handleFavorite}
			/>
		</div>
	);
};

export default CharactersContainer;
