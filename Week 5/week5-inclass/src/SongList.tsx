/** @format */

interface Props {
	songs: string[];
	setCurrentSongIndex: (index: number) => void;
}
function SongList({ songs, setCurrentSongIndex }: Props) {
	return (
		<ul>
			{songs.map((song, idx) => (
				<li onClick={() => setCurrentSongIndex(idx)}>{song}</li>
			))}
		</ul>
	);
}

export default SongList;
