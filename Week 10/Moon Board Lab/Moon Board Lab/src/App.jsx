import { useState } from "react";
import CardsItem from "./components/CardsItem";
import "./App.css";

const App = () => {
	const [cards, setCards] = useState([]);
	const [cardsGenerated, setCardsGenerated] = useState(false);

	const generateCard = (idx) => {
		return {
			id: idx,
			imgUrl: `https://picsum.photos/300/300?sig=${idx}`,
		};
	};

	const seedCards = (numOfCards = 10) => {
		const newCards = Array.from({ length: numOfCards }, (_, idx) =>
			generateCard(idx)
		);
		setCards(newCards);
		setCardsGenerated(true);
	};

	const handleMoveLeft = (cardId) => {
		setCards((prevCards) => {
			const cardIndex = prevCards.findIndex((card) => card.id === cardId);
			if (cardIndex > 0) {
				const newCards = [...prevCards];
				const [movedCard] = newCards.splice(cardIndex, 1);
				newCards.splice(cardIndex - 1, 0, movedCard);
				return newCards;
			}
			return prevCards;
		});
	};

	const handleMoveRight = (cardId) => {
		setCards((prevCards) => {
			const cardIndex = prevCards.findIndex((card) => card.id === cardId);
			if (cardIndex < prevCards.length - 1) {
				const newCards = [...prevCards];
				const [movedCard] = newCards.splice(cardIndex, 1);
				newCards.splice(cardIndex + 1, 0, movedCard);
				return newCards;
			}
			return prevCards;
		});
	};

	return (
		<div className="main">
			<ul className="cards">
				<CardsItem
					cards={cards}
					onMoveLeft={handleMoveLeft}
					onMoveRight={handleMoveRight}
				/>
			</ul>
			{!cardsGenerated && (
				<button onClick={() => seedCards(10)}>Seed Cards</button>
			)}
		</div>
	);
};

export default App;
