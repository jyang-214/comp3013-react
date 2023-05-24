import IBook from "../interface/IBook";
import "../App.css";

interface Props {
	book: IBook;
	currentBookIndex: number;
	setCurrentBookIndex: (idx: number) => void;
}

function ListItem({ book, currentBookIndex, setCurrentBookIndex }: Props) {
	const handleClick = () => {
		setCurrentBookIndex(book.id);
		console.log(book.id);
	};

	return (
		<li
			onClick={(e) => {
				e.preventDefault;
				handleClick();
			}}
			className="list-group-item"
		>
			<img className="coverImg" src={book.coverImg} alt="" />
			{book.name}
		</li>
	);
}

export default ListItem;
