import PropTypes from "prop-types";
import Card from "./Card";

const CardsItem = ({ cards, onMoveLeft, onMoveRight }) => {
	const rows = [];

	for (let i = 0; i < cards.length; i += 3) {
		const row = cards.slice(i, i + 3);
		const cardsRow = row.map((card) => (
			<Card
				key={card.id}
				card={card}
				onMoveLeft={onMoveLeft}
				onMoveRight={onMoveRight}
			/>
		));
		rows.push(
			<div key={i} className="cards_row">
				{cardsRow}
			</div>
		);
	}

	return <>{rows}</>;
};

CardsItem.propTypes = {
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			imgUrl: PropTypes.string.isRequired,
		})
	).isRequired,
	onMoveLeft: PropTypes.func.isRequired,
	onMoveRight: PropTypes.func.isRequired,
};

export default CardsItem;
