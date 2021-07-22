const TaskDesc = ({taskDesc, change, taskDescError}) => {
	return (
		<>
			<label htmlFor="taskDesc">Task description:</label>
			<textarea
				id="taskDesc"
				type="text"
				className="ToDoList__inputsBox__taskDesc"
				name="taskDesc"
				value={taskDesc}
				onChange={change}
			/>
			<span className="ToDoList__inputsBox__taskDescErr">
				{taskDescError ? "Desc error" : null}
			</span>
		</>
	);
};

export default TaskDesc;
