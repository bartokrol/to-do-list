const Task = ({
	taskNumber,
	header,
	desc,
	visible,
	taskOpenCloseClick,
	taskClassName,
}) => {
	const basicClass = `${taskClassName}__task`;
	const visibleTask = { visible } ? null : "closed";
	console.log(taskNumber, header, desc, visible);

	return (
		<div className={`${basicClass} ${visibleTask}`}>
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
			<button
				id={taskNumber}
				onClick={taskOpenCloseClick}
				className={`${basicClass}__openCloseBtn`}
			>
				Open
			</button>
		</div>
	);
};

export default Task;
