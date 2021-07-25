const Task = ({ header, desc }) => {
	return (
		<div className="task">
			<h1 className="task__header">{header}</h1>
			<p className="task__desc">{desc}</p>
			<div className="task__buttons">
				<button className="task__buttons__confirm">Confirm</button>
				<button className="task__buttons__edit">Edit</button>
				<button className="task__buttons__delete">Delete</button>
			</div>
		</div>
	);
};

export default Task;
