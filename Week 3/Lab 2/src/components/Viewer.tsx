/** @format */

interface Props {
	selectedCities: string[];
}

function Viewer(props: Props) {
	if (props.selectedCities.length === 0) {
		return (
			<>
				<h3>Selected Cities:</h3>

				<p>No items have been selected.</p>
			</>
		);
	}
	return (
		<>
			<h3>Selected Cities:</h3>
			<ul className="list-group">
				<li className="list-group-item active">
					{props.selectedCities}
				</li>
			</ul>
		</>
	);
}

export default Viewer;
