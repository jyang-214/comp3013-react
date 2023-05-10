/** @format */

import { useState } from "react";
import "./App.css";
import SongViewer from "./SongViewer";
import SongList from "./SongList";
import { songs } from "./data";

function App() {
	const [currentSongIndex, setCurrentSongIndex] = useState(0);

	return (
		<div className="App">
			<SongViewer currentSong={songs[currentSongIndex]} />
			<SongList songs={songs} setCurrentSongIndex={setCurrentSongIndex} />
		</div>
	);
}

export default App;
