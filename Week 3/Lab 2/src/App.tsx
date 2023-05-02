/** @format */

import Viewer from "./components/Viewer";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
	const cities: string[] = ["Vancouver", "Paris", "London"];
	const [selectedCities, setSelectedCities] = useState<string[]>([]);

	const handleSelectCity = (city: string) => {
		setSelectedCities([city]);
	};
	return (
		<>
			<Viewer selectedCities={selectedCities} />
			<ListGroup cities={cities} onSelectedCity={handleSelectCity} />
		</>
	);
}

export default App;
