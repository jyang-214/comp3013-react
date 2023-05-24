/** @format */

import Viewer from "./components/Viewer";
import ListGroup from "./components/ListGroup";
import { useState } from "react";
import books from "../../Midterm/src/data";
import IBook from "./interface/IBook";
import "./App.css";

function App() {
	const [selectedBooks, setSelectedBooks] = useState<IBook[]>([]);
	const [currentBookIndex, setCurrentBookIndex] = useState(0);

	const handleSelectBook = (book: IBook) => {
		setSelectedBooks([book]);
	};
	return (
		<>
			<Viewer currentBook={books[currentBookIndex]} />
			<ListGroup
				books={books}
				onSelectedBook={handleSelectBook}
				currentBookIndex={currentBookIndex}
				setCurrentBookIndex={setCurrentBookIndex}
			/>
		</>
	);
}

export default App;
