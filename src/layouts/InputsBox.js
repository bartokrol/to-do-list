import TaskTitle from "./TaskTitle";

const InputsBox = ({ inputs, change, click, errors }) => {
	return (
		<div className="ToDoList__inputsBox">
			<TaskTitle
				taskHeader={inputs.taskHeader}
				change={change}
				taskHeaderError={errors.taskHeaderError}
			/>
			<label htmlFor="taskDesc">Task description:</label>
			<textarea
				id="taskDesc"
				type="text"
				className="ToDoList__inputsBox__taskDesc"
				name="taskDesc"
				value={inputs.taskDesc}
				onChange={change}
			/>
			<span className="ToDoList__inputsBox__taskDescErr">
				{errors.taskDescError ? "Desc error" : null}
			</span>
			<button onClick={click}>Add</button>
		</div>
	);
};

export default InputsBox;
