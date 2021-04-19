import React, { useRef, useCallback } from 'react';

const Search = ({ query, setQuery }) => {
	const queryInput = useRef(null);

	const handleQuery = useCallback(() => {
		setQuery(queryInput.current.value);
	}, [query]);

	return (
		<>
			<input
				type='text'
				placeholder='Search a Character ... '
				value={query}
				ref={queryInput}
				onChange={handleQuery}
			/>
		</>
	);
};

export default Search;
