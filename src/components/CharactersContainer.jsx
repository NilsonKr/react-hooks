import React, { useState, useContext, useMemo } from 'react';
import Context from '../context';
import useCharacters from '../hooks/useCharacters';

import Characters from './Characters';
import Search from './Search';

import '../styles/Characters.css';

const urlApi = 'http://rickandmortyapi.com/api/character';

const CharactersContainer = () => {
	const [characters, updateCharacters] = useCharacters(urlApi);
	const [query, setQuery] = useState('');
	const { favorites, setFavorites } = useContext(Context);

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
				showMore={updateCharacters}
				handleFavorite={handleFavorite}
			/>
		</div>
	);
};

export default CharactersContainer;
