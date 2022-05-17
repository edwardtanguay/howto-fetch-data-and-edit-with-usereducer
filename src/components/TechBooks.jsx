import { TechBook } from '../components/TechBook';

export const TechBooks = ({ techBooks }) => {
	return (
		<div className="techBooks">
			{techBooks.map((techBook, index) => {
				return <TechBook key={index} techBook={techBook} />;
			})}
		</div>
	);
};
