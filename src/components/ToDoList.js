import { useState } from "react";
import InputsBox from "../layouts/InputsBox";

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

	const handleTaskSubmit = (e) => {
		e.preventDefault();

		const { taskHeader, taskDesc } = inputs;

		if (taskHeader.length > 2 && taskDesc.length > 10) {
			setInput({
				taskHeader: "",
				taskDesc: "",
			});
		}
	};

	return (
		<div className="ToDoList">
			<InputsBox
				inputs={inputs}
				change={handleInputChange}
				click={handleTaskSubmit}
			/>
		</div>
	);
}

export default ToDoList;
