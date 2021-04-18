import React, { useState, useReducer } from 'react';
import favoritesReducer from '../reducers/favoritesReducer';

const Context = React.createContext(null);

export const ThemeContext = props => {
	const [theme, setTheme] = useState({
		font: '#fff',
		favorite: { font: '#24325fff', border: '#24325fff' },
	});
	const [favorites, setFavorites] = useReducer(favoritesReducer, []);

	return (
		<Context.Provider value={{ theme, favorites, setFavorites, setTheme }}>
			{props.children}
		</Context.Provider>
	);
};
export default Context;
