import { useState, useEffect } from 'react';
import { TechBooks } from '../components/TechBooks';

const techBooksUrl = 'https://edwardtanguay.netlify.app/share/techBooks.json';

export const PageBooks = () => {
	const [techBooks, setTechBooks] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(techBooksUrl);
			const _techBooks = await response.json();
			setTechBooks(_techBooks);
		})();
	});

	return (
		<div className="page_books">
			<h2>Tech Books</h2>
			<p>I have following {techBooks.length} tech books:</p>
			<TechBooks techBooks={techBooks} />
		</div>
	);
};
