/** @format */

import { useState } from "react";
import ListItem from "./ListItem";

interface Props {
	cities: string[];
	onSelectedCity: (city: string) => void;
}

function ListGroup(props: Props) {
	const { cities, onSelectedCity } = props;
	const [selectedIndex, setSelectedIndex] = useState(-1);

	const handleClick = (city: string, index: number) => {
		setSelectedIndex(index);
		onSelectedCity(city);
	};

	if (cities.length === 0) {
		return <h3>No cities to select!</h3>;
	}

	return (
		<>
			<h3>List of Cities:</h3>
			<ul className="list-group">
				{cities.map((city, index) => (
					<li
						onClick={() => handleClick(city, index)}
						className={
							selectedIndex === index
								? "list-group-item active"
								: "list-group-item"
						}
					>
						{city}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
