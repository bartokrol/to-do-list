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

	return (
		<div className="ToDoList">
			<InputsBox inputs={inputs} change={handleInputChange} />
		</div>
	);
}

export default ToDoList;
