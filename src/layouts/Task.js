const Task = ({ header, desc }) => {
	const basicClass = `toDoList__tasks__task`;

	return (
		<div className={basicClass}>
			<h1 className={`${basicClass}__header`}>{header}</h1>
			<p className={`${basicClass}__desc`}>{desc}</p>
			<div className={`${basicClass}__buttons`}>
				<button className={`${basicClass}__buttons__confirm`}>
					Confirm
				</button>
				<button className={`${basicClass}__buttons__edit`}>Edit</button>
				<button className={`${basicClass}__buttons__delete`}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default Task;
