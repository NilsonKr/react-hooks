import React from 'react';

import Header from './components/Header';
import CharactersContainer from './components/CharactersContainer';
import FavoritesList from './components/FavoritesList';

function App() {
	return (
		<div className='App'>
			<Header />
			<FavoritesList />
			<CharactersContainer />
		</div>
	);
}

export default App;
