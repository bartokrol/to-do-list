const TaskDesc = ({ taskDesc, change, taskDescError, inputsBoxClassName }) => {
	const taskDescClassName = `${inputsBoxClassName}__taskDesc`;
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
				{taskDescError ? "Desc error" : null}
			</span>
		</div>
	);
};

export default TaskDesc;
