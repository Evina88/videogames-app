function ListGroup() {
	let colors = ["red", "blue", "green", "yellow", "orange"];
    colors = [];

	return (
		// syntax for fragments: <></>
		<>
			<h1>List</h1>
            {colors.length === 0 && <p>No colors available</p>}
			<ul className="list-group">
				{colors.map((color) => (
					<li key={color}>{color}</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
