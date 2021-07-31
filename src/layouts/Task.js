const Task = ({
	taskNumber,
	header,
	desc,
	visible,
	taskOpenCloseClick,
	taskDeleteClick,
	taskEditClick,
	taskConfirmClick,
	taskClassName,
	taskCompleted,
}) => {
	const basicClass = `${taskClassName}__task`;
	const visibleTask = visible ? null : "closed";
	const openCloseBtnText = visible ? "Close" : "Open";

	return (
		<div className={`${basicClass} ${visibleTask}`}>
			<div className={`${basicClass}__taskText`}>
				<h1 className={`${basicClass}__taskText__header`}>{header}</h1>
				<p className={`${basicClass}__taskText__desc`}>{desc}</p>
			</div>
			<div className={`${basicClass}__buttons`}>
				<button
					id={taskNumber}
					className={`${basicClass}__buttons__confirm`}
					onClick={taskConfirmClick}
				></button>
				<button
					id={taskNumber}
					className={`${basicClass}__buttons__edit`}
					onClick={taskEditClick}
				></button>
				<button
					id={taskNumber}
					className={`${basicClass}__buttons__delete`}
					onClick={taskDeleteClick}
				></button>
			</div>
			<button
				id={taskNumber}
				value={taskCompleted}
				onClick={taskOpenCloseClick}
				className={`${basicClass}__openCloseBtn`}
			>
				{openCloseBtnText}
			</button>
		</div>
	);
};

export default Task;
