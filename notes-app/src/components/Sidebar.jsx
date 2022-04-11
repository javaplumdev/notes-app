const Sidebar = ({ onClick }) => {
	return (
		<>
			<div className="sidebar-title">
				<h4>Notes App</h4>
				<button onClick={onClick}>Add</button>
			</div>
		</>
	);
};

export default Sidebar;
