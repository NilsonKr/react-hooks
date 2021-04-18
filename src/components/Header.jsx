import React, { useState, useContext } from 'react';
import Context from '../context/';

import '../styles/Header.css';

const Header = props => {
	const [darkMode, setDarkMode] = useState(false);
	//Using Context
	const context = useContext(Context);

	//Change Color on css variables and context provider
	const handleChangeMode = () => {
		if (!darkMode) {
			context.setTheme({
				font: '#1fac4e',
				favorite: { font: '#fff', border: '#1fac4e' },
			});
			document.body.style.setProperty('--second-bg', '#24325fff');
			document.body.style.setProperty('--bg-color', '#000');
		}
		if (darkMode) {
			context.setTheme({
				font: '#fff',
				favorite: { font: '#24325fff', border: '#24325fff' },
			});
			document.body.style.setProperty('--second-bg', '#1fac4e');
			document.body.style.setProperty('--bg-color', '#fff');
		}

		setDarkMode(!darkMode);
	};

	return (
		<header className='header'>
			<div className='header__container'>
				<h2 style={{ color: context.theme.font }}>ReactHooks</h2>
				<button type='button' onClick={handleChangeMode}>
					{darkMode ? 'LightMode' : 'DarkMode'}
				</button>
			</div>
		</header>
	);
};

export default Header;
