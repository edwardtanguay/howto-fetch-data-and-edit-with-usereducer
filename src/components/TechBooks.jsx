export const TechBooks = ({ techBooks }) => {
	return (
		<div className="techBooks">
			{techBooks.map((techBook, index) => {
				return (
					<div key={index} className="techBook">
						<img
							src={`https://edwardtanguay.netlify.app/share/images/techBooks/${techBook.idCode}.jpg`}
							alt="tech book"
						/>
						<div className="info">
							<div className="title">{techBook.title}</div>
							<div className="description">
								{techBook.description}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
