const TaskDesc = ({ taskDesc, change, taskDescError }) => {
	return (
		<div className="ToDoList__inputsBox__taskDesc">
			<label htmlFor="taskDesc">Task description:</label>
			<textarea
				id="taskDesc"
				type="text"
				className="ToDoList__inputsBox__taskDesc__input"
				name="taskDesc"
				value={taskDesc}
				onChange={change}
			/>
			<span className="ToDoList__inputsBox__taskErr">
				{taskDescError ? "Desc error" : null}
			</span>
		</div>
	);
};

export default TaskDesc;
