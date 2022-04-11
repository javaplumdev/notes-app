import React, { useState } from 'react';

import Sidebar from './components/Sidebar';
import Editor from './components/Editor';

function App() {
	const [notes, setNotes] = useState([]);

	const handleClick = () => {
		console.log('Hi');
	};

	return (
		<div className="app-container">
			<Sidebar onClick={handleClick} />
			<Editor />
		</div>
	);
}

export default App;
