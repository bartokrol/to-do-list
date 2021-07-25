const TaskDesc = ({ taskDesc, change, taskDescError }) => {
	return (
		<div className="toDoList__inputsBox__taskDesc">
			<label
				className="toDoList__inputsBox__taskDesc__label"
				htmlFor="taskDesc"
			>
				Task description:
			</label>
			<textarea
				id="taskDesc"
				type="text"
				className="toDoList__inputsBox__taskDesc__input"
				name="taskDesc"
				value={taskDesc}
				onChange={change}
			/>
			<span className="toDoList__inputsBox__taskDesc__taskErr">
				{taskDescError ? "Desc error" : null}
			</span>
		</div>
	);
};

export default TaskDesc;
