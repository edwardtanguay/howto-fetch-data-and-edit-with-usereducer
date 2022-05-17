export const TechBook = ({ techBook, dispatchTechBooks }) => {
	return (
		<div className="techBook">
			<img
				src={`https://edwardtanguay.netlify.app/share/images/techBooks/${techBook.idCode}.jpg`}
				alt="tech book"
			/>
			<div className="info">
				<div className="title">{techBook.title}</div>
				<div className="description">{techBook.description}</div>
				<div className="buttonArea">
					<button
						onClick={() =>
							dispatchTechBooks({
								type: 'delete',
								payload: { techBook },
							})
						}
					>
						Delete
					</button>
					<button
						onClick={() =>
							dispatchTechBooks({
								type: 'markFinished',
								payload: { techBook },
							})
						}
					>
						Mark Finished
					</button>
				</div>
			</div>
		</div>
	);
};
