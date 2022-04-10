import React, { useState } from 'react';

// Components
import SidebarTitle from './components/SidebarTitle';
import SidebarContent from './components/SidebarContent';
import Editor from './components/Editor';

function App() {
	const [notesData, setNotesData] = useState({
		id: 1,
		title: 'Title',
		body: 'Body',
	});

	const [newNotesData, setNewNotesData] = useState([]);

	function addNotes() {
		const makeRandomNumber = Math.floor(Math.random() * 10000);

		setNotesData((prevState) => {
			return {
				...prevState,
				id: makeRandomNumber,
			};
		});

		setNewNotesData((prevState) => {
			return [...prevState, notesData];
		});

		console.log(newNotesData);
		console.log(newNotesData.length);
	}

	const item = newNotesData.map((item) => {
		return <SidebarContent key={item.id} item={item} id={item.id} />;
	});

	return (
		<div className="app-container">
			<div className="sidebar">
				<SidebarTitle handleClick={addNotes} />
				{item}
			</div>
			<Editor />
		</div>
	);
}

export default App;
