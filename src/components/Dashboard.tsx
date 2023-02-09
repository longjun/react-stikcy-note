import StickyNote from "./StickyNote";

const Dashboard = () => {
	const note = {
		content: 'note',
		position: {
			x: 100,
			y: 100
		}
	}
	return (
		<div className="dashboard">
			<StickyNote note={note} />
		</div>
	)
}

export default Dashboard;