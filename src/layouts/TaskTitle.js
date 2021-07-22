const TaskTitle = ({ taskHeader, change, taskHeaderError }) => {
	return (
		<>
			<label htmlFor="taskTitle">Task title:</label>
			<input
				id="taskTitle"
				type="text"
				className="ToDoList__inputsBox__taskTitle"
				name="taskHeader"
				value={taskHeader}
				onChange={change}
			/>
			<span className="ToDoList__inputsBox__taskTitleErr">
				{taskHeaderError ? "Title error" : null}
			</span>
		</>
	);
};

export default TaskTitle;
