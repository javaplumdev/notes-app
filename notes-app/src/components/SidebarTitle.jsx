function Sidebar(props) {
	return (
		<div className="side-bar">
			<div className="title-sidebar">
				<p>Notes App</p>
				<button onClick={props.handleClick}>Add</button>
			</div>
		</div>
	);
}

export default Sidebar;
