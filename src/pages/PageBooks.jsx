import { useEffect, useReducer } from 'react';
import { TechBooks } from '../components/TechBooks';

const techBooksUrl = 'https://edwardtanguay.netlify.app/share/techBooks.json';

const reducer = (techBooks, action) => {
	switch (action.type) {
		case 'load':
			return [...action.payload]
	}
};

export const PageBooks = () => {
	const [techBooks, dispatch] = useReducer(reducer, []);

	const handleDeleteTechBook = (techBook) => {
		// const _techBooks = techBooks.filter(m => m.id !== techBook.id);
		// setTechBooks(_techBooks);
		console.log('deleting techBook with id ' + techBook.id);
	}

	useEffect(() => {
		(async () => {
			const response = await fetch(techBooksUrl);
			const _techBooks = await response.json();
			// setTechBooks(_techBooks);
			dispatch({ type: 'load', payload: _techBooks });
		})();
	}, []);

	return (
		<div className="page_books">
			<h2>Tech Books</h2>
			<p>I have following {techBooks.length} tech books:</p>
			<TechBooks techBooks={techBooks} handleDeleteTechBook={handleDeleteTechBook} />
		</div>
	);
};