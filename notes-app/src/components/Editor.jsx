function Editor() {
	return (
		<div className="editor">
			<p>This is the editor tab</p>
			<textarea
				cols="50"
				rows="10"
				placeholder="What's on your mind..."
			></textarea>
			<button>Publish</button>
		</div>
	);
}

export default Editor;
