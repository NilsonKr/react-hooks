import { useState, useEffect } from 'react';

const useCharacters = API => {
	const [characters, setCharacters] = useState({ results: [] });

	useEffect(() => {
		fetch(API)
			.then(data => data.json())
			.then(data => setCharacters(data))
			.catch(err => console.log(err.message));
	}, [API]);

	//Update Characters and load More
	const updateCharacters = () => {
		fetch(characters.info.next)
			.then(data => data.json())
			//Concating Past characters with new characters
			.then(data =>
				setCharacters({ ...data, results: [...characters.results, ...data.results] })
			)
			.catch(err => console.log(err.message));
	};

	return [characters, updateCharacters];
};

export default useCharacters;
