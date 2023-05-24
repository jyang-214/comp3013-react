/** @format */

import { useState } from "react";
import ListItem from "./ListItem";
import books from "../../../Midterm/src/data";
import IBook from "../interface/IBook";
import "../App.css";

interface Props {
	books: IBook[];
	onSelectedBook: (book: IBook) => void;
	currentBookIndex: number;
	setCurrentBookIndex: (idx: number) => void;
}

function ListGroup(props: Props) {
	const { books, onSelectedBook, currentBookIndex, setCurrentBookIndex } =
		props;
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleClick = (book: IBook, index: number) => {
		setSelectedIndex(index);
		onSelectedBook(book);
	};

	if (books.length === 0) {
		return <h3>No books to select!</h3>;
	}

	return (
		<>
			<h3>List of Books:</h3>

			{books.map((book, index) => (
				<ul>
					<ListItem
						book={book}
						currentBookIndex={index}
						setCurrentBookIndex={setCurrentBookIndex}
					/>
				</ul>
			))}
		</>
	);
}

export default ListGroup;
