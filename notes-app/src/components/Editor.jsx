function Editor(props) {
	return (
		<div className="editor">
			<div className="editor-buttons">
				<button>Edit</button>
				<button>Preview</button>
			</div>
			<textarea
				onChange={props.onChange}
				name="body"
				cols="50"
				rows="10"
				placeholder="What's on your mind..."
			></textarea>
		</div>
	);
}

export default Editor;
