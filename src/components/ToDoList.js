import { useState } from "react";
import InputsBox from "../layouts/InputsBox";

function ToDoList() {
	const [inputs, setInput] = useState({
		taskHeader: "",
		taskDesc: "",
	});

	const [errors, setError] = useState({
		taskHeaderError: false,
		taskDescError: false,
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
		let { taskHeaderError, taskDescError } = errors;

		if (taskHeader.length < 3) {
			taskHeaderError = true;
		} else {
			taskHeaderError = false;
		}

		if (taskDesc.length < 11) {
			taskDescError = true;
		} else {
			taskDescError = false;
		}

		if (taskHeader.length > 2 && taskDesc.length > 10) {
			setInput({
				taskHeader: "",
				taskDesc: "",
			});
		}

		setError({
			taskHeaderError,
			taskDescError,
		});
	};

	return (
		<div className="ToDoList">
			<InputsBox
				inputs={inputs}
				change={handleInputChange}
				click={handleTaskSubmit}
				errors={errors}
			/>
		</div>
	);
}

export default ToDoList;
