const TaskTitle = ({
	taskHeader,
	change,
	taskHeaderError,
	taskHeaderMessage,
	inputsBoxClassName,
	isTaskEdited,
	editedClass,
}) => {
	const taskTitleClassName = `${inputsBoxClassName}__taskTitle`;
	const message = `${taskHeaderMessage}`;
	const editClass = isTaskEdited ? `${editedClass}` : null;
	return (
		<div className={taskTitleClassName}>
			<label
				className={`${taskTitleClassName}__label`}
				htmlFor="taskTitle"
			>
				Task title:
			</label>
			<input
				id="taskTitle"
				type="text"
				className={`${taskTitleClassName}__input ${editClass}`}
				name="taskHeader"
				value={taskHeader}
				onChange={change}
			/>
			<span className={`${taskTitleClassName}__taskErr`}>
				{taskHeaderError ? message : null}
			</span>
		</div>
	);
};

export default TaskTitle;
