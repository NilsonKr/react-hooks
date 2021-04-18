import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeContext } from './context/index';

ReactDOM.render(
	<React.StrictMode>
		<ThemeContext>
			<App />
		</ThemeContext>
	</React.StrictMode>,
	document.getElementById('root')
);
