import { TechBook } from '../components/TechBook';

export const TechBooks = ({ techBooks, handleDeleteTechBook }) => {
	return (
		<div className="techBooks">
			{techBooks.map((techBook, index) => {
				return <TechBook key={index} techBook={techBook} handleDeleteTechBook={handleDeleteTechBook} />;
			})}
		</div>
	);
};
