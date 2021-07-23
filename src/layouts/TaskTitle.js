const TaskTitle = ({ taskHeader, change, taskHeaderError }) => {
	return (
		<div className="toDoList__inputsBox__taskTitle">
			<label className="toDoList__inputsBox__taskTitle__label" htmlFor="taskTitle">Task title:</label>
			<input
				id="taskTitle"
				type="text"
				className="toDoList__inputsBox__taskTitle__input"
				name="taskHeader"
				value={taskHeader}
				onChange={change}
			/>
			<span className="toDoList__inputsBox__taskTitle__taskErr">
				{taskHeaderError ? "Title error" : null}
			</span>
		</div>
	);
};

export default TaskTitle;
