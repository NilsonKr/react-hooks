import React from 'react';

const Characters = props => {
	const { showMore, handleFavorite, characters } = props;

	return (
		<>
			<div className='characters__container'>
				{characters.map(item => (
					<div className='item' key={item.id}>
						<div className='item__container'>
							<img src={item.image} alt='' />
							<div className='item--info'>
								<h2>{item.name}</h2>
								<p>{item.status}</p>
								<em>{item.species}</em>
							</div>
						</div>
						<button className='favorite--btn' onClick={() => handleFavorite(item)}>
							ADD FAVORITE
						</button>
					</div>
				))}
			</div>
			<button className='more' onClick={showMore}>
				MORE...
			</button>
		</>
	);
};

export default Characters;
