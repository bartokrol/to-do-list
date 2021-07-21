import { useState } from "react";

function ToDoList() {
	const [inputs, setInput] = useState({
		taskHeader: "",
		taskDesc: "",
	});

	const handleInputChange = (e) => {
		const { value, name } = e.target;

		setInput({
			...inputs,
			[name]: value,
		});
	};

	return (
		<div className="ToDoList">
			<div className="ToDoList__inputsBox">
				<input
					type="text"
					className="ToDoList__inputsBox__headingInput"
					name="taskHeader"
					value={inputs.taskHeader}
					onChange={handleInputChange}
				/>
				<textarea
					type="text"
					className="ToDoList__inputsBox__descriptionInput"
					name="taskDesc"
					value={inputs.taskDesc}
					onChange={handleInputChange}
				/>
				<button>Add</button>
			</div>
		</div>
	);
}

export default ToDoList;
