function ListGroup() {
	const colors = ["red", "blue", "green", "yellow", "orange"];

	return (
		// syntax for fragments: <></>
		<>
			<h1>List</h1>
			<ul className="list-group">
				{colors.map((color) => (
					<li key={color}>{color}</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
