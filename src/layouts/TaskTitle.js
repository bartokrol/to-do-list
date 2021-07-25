const TaskTitle = ({
	taskHeader,
	change,
	taskHeaderError,
	inputsBoxClassName,
}) => {
	const taskTitleClassName = `${inputsBoxClassName}__taskTitle`;
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
				className={`${taskTitleClassName}__input`}
				name="taskHeader"
				value={taskHeader}
				onChange={change}
			/>
			<span className={`${taskTitleClassName}__taskErr`}>
				{taskHeaderError ? "Title error" : null}
			</span>
		</div>
	);
};

export default TaskTitle;
