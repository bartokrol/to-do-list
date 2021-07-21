const InputsBox = ({ inputs, change, click }) => {
	return (
		<div className="ToDoList__inputsBox">
			<input
				type="text"
				className="ToDoList__inputsBox__headingInput"
				name="taskHeader"
				value={inputs.taskHeader}
				onChange={change}
			/>
			<textarea
				type="text"
				className="ToDoList__inputsBox__descriptionInput"
				name="taskDesc"
				value={inputs.taskDesc}
				onChange={change}
			/>
			<button onClick={click}>Add</button>
		</div>
	);
};

export default InputsBox;
