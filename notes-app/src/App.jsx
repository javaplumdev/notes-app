import React, { useState } from 'react';

// Components
import SidebarTitle from './components/SidebarTitle';
import SidebarContent from './components/SidebarContent';
import Editor from './components/Editor';

function App() {
	const [notesData, setNotesData] = useState({
		id: 1,
		title: '',
		body: '',
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
	}

	function handleChange(event) {
		setNewNotesData((prevState) => {
			const [name, value] = event.target;

			return {
				...prevState,
				[name]: value,
			};
		});
	}

	const style = {
		backgroundColor: '',
	};

	function showID(id) {
		newNotesData.forEach((item) => {
			if (item.id === id) {
				console.log(item);
			}
		});

		style.backgroundColor = '#ffb703';
	}

	const item = newNotesData.map((item) => {
		return (
			<SidebarContent
				key={item.id}
				item={item}
				id={item.id}
				showID={showID}
				style={style}
			/>
		);
	});

	return (
		<div className="app-container">
			<div className="sidebar">
				<SidebarTitle handleClick={addNotes} />
				{item}
			</div>
			{newNotesData.length > 0 ? (
				<Editor onChange={showID} bodyValue={newNotesData.body} />
			) : (
				console.log('You hane no notes yet')
			)}
		</div>
	);
}

export default App;
