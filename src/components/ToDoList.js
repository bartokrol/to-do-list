import { useState } from "react";

function ToDoList() {
	const [taskHeader, setTaskHeader] = useState("");
	const [taskDesc, setTaskDesc] = useState("");

	return (
		<div className="ToDoList">
			<div className="ToDoList__inputsBox">
				<input
					type="text"
					className="ToDoList__inputsBox__headingInput"
					value={taskHeader}
				/>
				<textarea
					type="text"
					className="ToDoList__inputsBox__descriptionInput"
					value={taskDesc}
				/>
				<button>Add</button>
			</div>
		</div>
	);
}

export default ToDoList;
