import { useEffect, useReducer } from 'react';
import { TechBooks } from '../components/TechBooks';

const techBooksUrl = 'https://edwardtanguay.netlify.app/share/techBooks.json';

const reducer = (techBooks, action) => {
	switch (action.type) {
		case 'load':
			return [...action.payload];
		case 'markFinished':
			action.payload.techBook.title += ' -- FINISHED';
			return [...techBooks];
		case 'delete':
			const _techBooks = techBooks.filter(
				(m) => m.id !== action.payload.techBook.id
			);
			return _techBooks;
	}
};

export const PageBooks = () => {
	const [techBooks, techBooksDispatch] = useReducer(reducer, []);


	useEffect(() => {
		(async () => {
			const response = await fetch(techBooksUrl);
			const _techBooks = await response.json();
			techBooksDispatch({ type: 'load', payload: _techBooks });
		})();
	}, []);

	return (
		<div className="page_books">
			<h2>Tech Books</h2>
			<p>I have following {techBooks.length} tech books:</p>
			<TechBooks techBooks={techBooks} techBooksDispatch={techBooksDispatch} />
		</div>
	);
};
