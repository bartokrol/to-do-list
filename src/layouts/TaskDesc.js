const TaskDesc = ({
	taskDesc,
	change,
	taskDescError,
	taskDescMessage,
	inputsBoxClassName,
}) => {
	const taskDescClassName = `${inputsBoxClassName}__taskDesc`;
	const message = `${taskDescMessage}`;
	return (
		<div className={taskDescClassName}>
			<label className={`${taskDescClassName}__label`} htmlFor="taskDesc">
				Task description:
			</label>
			<textarea
				id="taskDesc"
				type="text"
				className={`${taskDescClassName}__input`}
				name="taskDesc"
				value={taskDesc}
				onChange={change}
			/>
			<span className={`${taskDescClassName}__taskErr`}>
				{taskDescError ? message : null}
			</span>
		</div>
	);
};

export default TaskDesc;
