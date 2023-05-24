/** @format */

import { render } from "react-dom";
import IBook from "../interface/IBook";
import "../App.css";

interface Props {
	currentBook: IBook;
}

function Viewer(props: Props) {
	if (!props.currentBook) {
		return (
			<>
				<p>There are no cities selected.</p>
			</>
		);
	}
	function renderStarRating(rating: number) {
		const star = "⭐️";
		const fullStars = star.repeat(Math.floor(rating));
		const halfStar = rating % 1 !== 0 ? "⭐️" : "";
		return `${fullStars}${halfStar}`;
	}

	return (
		<>
			<h3>Selected Book:</h3>
			<ul className="list-group">
				<li className="list-group-item active">
					<h3>{props.currentBook.name}</h3>
					<h4>{props.currentBook.author}</h4>
					<img id="viewer" src={props.currentBook.coverImg} alt="" />
					{props.currentBook.hasOwnProperty("sequels") ? (
						<h5>Sequls:</h5>
					) : (
						""
					)}
					<ul>
						{props.currentBook.hasOwnProperty("sequels")
							? props.currentBook.sequels.map((sequel, idx) => (
									<li key={idx}>{sequel}</li>
							  ))
							: ""}
					</ul>
					<h6>Rating</h6>
					{renderStarRating(props.currentBook.rating)}
				</li>
			</ul>
		</>
	);
}

export default Viewer;
