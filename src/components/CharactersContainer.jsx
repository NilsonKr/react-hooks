import React, { useState, useEffect, useContext, useMemo } from 'react';
import Context from '../context';

import Characters from './Characters';
import Search from './Search';

import '../styles/Characters.css';

const urlApi = 'http://rickandmortyapi.com/api/character';

const CharactersContainer = () => {
	const [characters, setCharacters] = useState({ results: [] });
	const [query, setQuery] = useState('');
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

	//Filter Characters Search
	const filteredCharacters = useMemo(
		() =>
			characters.results.filter(item => {
				return item.name.toLowerCase().includes(query.toLowerCase());
			}),
		[query, characters]
	);

	return (
		<div className='characters'>
			<Search query={query} setQuery={setQuery} />
			<Characters
				characters={filteredCharacters}
				showMore={showMore}
				handleFavorite={handleFavorite}
			/>
		</div>
	);
};

export default CharactersContainer;
