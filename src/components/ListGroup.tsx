import { MouseEvent } from "react";

function ListGroup() {
	let colors = ["red", "blue", "green", "yellow", "orange"];

    // Event handler
    const handleClick = (event: MouseEvent) => console.log(event);

	return (
		// syntax for fragments: <></>
		<>
			<h1>List</h1>
			{colors.length === 0 && <p>No colors available</p>}
			<ul className="list-group">
				{colors.map((color) => (
					<li
						className="list-group-item"
						key={color}
						onClick={handleClick}>
						{color}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
