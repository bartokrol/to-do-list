const InputsBox = ({ inputs, change }) => {
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
			<button>Add</button>
		</div>
	);
};

export default InputsBox;
