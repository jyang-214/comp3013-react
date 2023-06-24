import PropTypes from "prop-types";

const Card = ({ card, onMoveLeft, onMoveRight }) => {
	const { id, imgUrl } = card;

	const handleMoveLeft = () => {
		onMoveLeft(id);
	};

	const handleMoveRight = () => {
		onMoveRight(id);
	};

	return (
		<li className="cards_item">
			<div className="card">
				<div className="card_image">
					<img src={imgUrl} alt={`Card ${id}`} />
				</div>
				<div className="card_content">
					<button className="left" onClick={handleMoveLeft}>
						&lt;
					</button>
					<button className="right" onClick={handleMoveRight}>
						&gt;
					</button>
				</div>
			</div>
		</li>
	);
};

Card.propTypes = {
	card: PropTypes.shape({
		id: PropTypes.number.isRequired,
		imgUrl: PropTypes.string.isRequired,
	}).isRequired,
	onMoveLeft: PropTypes.func.isRequired,
	onMoveRight: PropTypes.func.isRequired,
};

export default Card;
