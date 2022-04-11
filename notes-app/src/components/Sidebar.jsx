const Sidebar = ({
	onClick,
	notesData,
	activeNote,
	setActiveNote,
	deleteButton,
}) => {
	return (
		<div className="sidebar">
			<div className="sidebar-title">
				<h4>Notes App</h4>
				<button onClick={onClick}>Add</button>
			</div>
			<div className="sidebar-notes-holder">
				{notesData.map((note) => {
					return (
						<div
							className={`sidebar-notes ${note.id === activeNote && 'active'}`}
							key={note.id}
							onClick={() => setActiveNote(note.id)}
						>
							<div className="sidebar-notes-title">
								<h2>Title</h2>
								<p onClick={() => deleteButton(note.id)}>Delete</p>
							</div>
							<p className="preview-body">Body</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Sidebar;
