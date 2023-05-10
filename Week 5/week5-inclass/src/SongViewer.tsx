/** @format */

interface Props {
	currentSong: string;
}

function SongViewer({ currentSong }: Props) {
	return <div>Current Song: {currentSong}</div>;
}

export default SongViewer;
// default: if this is the only function you are exporting
