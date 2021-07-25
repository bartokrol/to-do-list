import { useState } from "react";
import InputsBox from "../layouts/InputsBox";
import Tasks from "../layouts/Tasks";
import "../styles/toDoList.scss";

function ToDoList() {
	const toDolistClassName = "toDoList";
	const [inputs, setInput] = useState({
		taskHeader: "",
		taskDesc: "",
	});

	const [errors, setError] = useState({
		taskHeaderError: false,
		taskDescError: false,
	});

	const [tasks, setTasks] = useState([
		{
			taskHeader: "Bartosz",
			taskDesc:
				"KrólKrólKrólKrólKrólKrólKrólKrólKrólKrólKrólKrólKrólKrólKrólKról",
			taskNumber: 0,
			taskVisible: true,
		},
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
		const taskVisible = true;

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
			taskArr.push({ taskHeader, taskDesc, taskNumber, taskVisible });
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

	const handleTaskOpenCloseButton = (e) => {
		e.preventDefault();
		const target = e.target.id;
		const task = tasks[target];

		console.log(task);
	};

	return (
		<div className={`${toDolistClassName}`}>
			<InputsBox
				inputs={inputs}
				change={handleInputChange}
				click={handleTaskSubmit}
				errors={errors}
				toDolistClassName={`${toDolistClassName}`}
			/>
			<Tasks
				tasks={tasks}
				toDolistClassName={`${toDolistClassName}`}
				click={handleTaskOpenCloseButton}
			/>
		</div>
	);
}

export default ToDoList;
