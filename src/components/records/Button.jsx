export default function Button({ caption, click }) {
	return (
		<button
			onClick={click}
		>
			{caption}
		</button>
	);
}