function SidebarContent(props) {
	return (
		<div
			className="sidebar-notes"
			onClick={() => props.showID(props.id)}
			style={props.style}
		>
			Notes {props.id}
		</div>
	);
}

export default SidebarContent;
