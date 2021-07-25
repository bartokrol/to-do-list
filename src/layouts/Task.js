const Task = ({ header, desc, taskClassName }) => {
	const basicClass = `${taskClassName}__task`;

	return (
		<div className={basicClass}>
			<div className={`${basicClass}__taskText`}>
				<h1 className={`${basicClass}__taskText__header`}>{header}</h1>
				<p className={`${basicClass}__taskText__desc`}>{desc}</p>
			</div>
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
