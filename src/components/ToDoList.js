import { useState } from "react";
import InputsBox from "../layouts/InputsBox";
import Tasks from "../layouts/Tasks";
import "../styles/toDoList.scss";

function ToDoList() {
	const [inputs, setInput] = useState({
		taskHeader: "",
		taskDesc: "",
	});

	const [errors, setError] = useState({
		taskHeaderError: false,
		taskDescError: false,
	});

	const [tasks, setTasks] = useState([
		{ taskHeader: "Bartosz", taskDesc: "KrólKrólKrólKról", taskNumber: 0 },
	]);

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
		const taskArr = tasks;
		const taskNumber = tasks.length;

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
			taskArr.push({ taskHeader, taskDesc, taskNumber });
			setTasks(taskArr);
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
		<div className="toDoList">
			<InputsBox
				inputs={inputs}
				change={handleInputChange}
				click={handleTaskSubmit}
				errors={errors}
			/>
			<Tasks tasks={tasks} />
		</div>
	);
}

export default ToDoList;
