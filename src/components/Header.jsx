import React, { useState } from 'react';

import '../styles/Header.css';

const Header = props => {
	const [darkMode, setDarkMode] = useState(false);

	//Change Color
	const handleChangeMode = () => {
		if (!darkMode) {
			document.body.style.setProperty('--second-bg', '#24325fff');
			document.body.style.setProperty('--bg-color', '#000');
		}
		if (darkMode) {
			document.body.style.setProperty('--second-bg', '#1fac4e');
			document.body.style.setProperty('--bg-color', '#fff');
		}

		setDarkMode(!darkMode);
	};

	return (
		<header className='header'>
			<div className='header__container'>
				<h2>ReactHooks</h2>
				<button type='button' onClick={handleChangeMode}>
					{darkMode ? 'LightMode' : 'DarkMode'}
				</button>
			</div>
		</header>
	);
};

export default Header;
