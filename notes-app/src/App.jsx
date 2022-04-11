import React, { useState } from 'react';

import uuid from 'react-uuid';

import Sidebar from './components/Sidebar';
import Editor from './components/Editor';

function App() {
	const [notesData, setNotesData] = useState([]);
	const [activeNote, setActiveNote] = useState(false);

	const handleClick = () => {
		const notes = {
			id: uuid(),
			title: 'Title Undefined',
			body: '',
		};

		setNotesData([...notesData, notes]);

		console.log(notesData);
	};

	const deleteButton = (idToDelete) => {
		setNotesData(notesData.filter((note) => note.id !== idToDelete));
	};

	return (
		<div className="app-container">
			<Sidebar
				onClick={handleClick}
				notesData={notesData}
				activeNote={activeNote}
				setActiveNote={setActiveNote}
				deleteButton={deleteButton}
			/>
			<Editor />
		</div>
	);
}

export default App;
