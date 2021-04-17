import React, { useState } from 'react';

const Header = props => {
	const [darkMode, setDarkMode] = useState(false);

	//Change Color
	const handleChangeMode = () => {
		if (!darkMode) {
			document.body.style.background = 'black';
			document.body.style.color = 'white';
		}
		if (darkMode) {
			document.body.style.background = 'white';
			document.body.style.color = 'black';
		}

		setDarkMode(!darkMode);
	};

	return (
		<header>
			<button type='button' onClick={handleChangeMode}>
				{darkMode ? 'React LightMode' : 'React DarkMode'}
			</button>
		</header>
	);
};

export default Header;
