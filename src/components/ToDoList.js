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

		switch (true) {
			case taskHeader.length < 3 && taskDesc.length < 11:
				setError({
					taskHeaderError: true,
					taskDescError: true,
				});
				break;
			case taskHeader.length < 3:
				setError({ ...errors, taskHeaderError: true });
				break;
			case taskDesc.length < 11:
				setError({ ...errors, taskDescError: true });
				break;
			case taskHeader.length > 2 && taskDesc.length > 10:
				setInput({
					taskHeader: "",
					taskDesc: "",
				});
				break;
			default:
				return;
		}
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
