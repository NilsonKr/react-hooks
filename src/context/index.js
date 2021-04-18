import React, { useState } from 'react';

const Context = React.createContext(null);

export const ThemeContext = props => {
	const [theme, setTheme] = useState({ font: '#fff' });

	return (
		<Context.Provider value={{ theme, setTheme }}>{props.children}</Context.Provider>
	);
};
export default Context;
