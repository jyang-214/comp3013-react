import { getImageUrl } from "./utils.js";

export default function Profile({
	name,
	imageUrl,
	imageID,
	profession,
	awards,
	discovery,
}) {
	return (
		<>
			<section className="profile">
				<h2>{name}</h2>
				<img
					className="avatar"
					src={getImageUrl({ imageID })}
					alt={name}
					width={70}
					height={70}
				/>
				<ul>
					<li>
						<b>Profession:</b>
						{profession}
					</li>
					<li>
						<b>Awards: {awards.length}</b>
						{awards}
					</li>
					<li>
						<b>Discovered: </b>
						{discovery}
					</li>
				</ul>
			</section>
		</>
	);
}
