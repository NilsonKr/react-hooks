import React, { useContext } from 'react';
import Context from '../context';

import '../styles/Favorites.css';

const FavoritesList = () => {
	const { favorites, theme } = useContext(Context);

	return (
		<ul className='favorites'>
			{favorites.map(item => (
				<li className='favorites--item' key={item.id}>
					<div className='favorite--cover' style={{ borderColor: theme.favorite.border }}>
						<img src={item.image} alt='' />
					</div>
					<em style={{ color: theme.favorite.font }}>{item.name}</em>
				</li>
			))}
		</ul>
	);
};

export default FavoritesList;
