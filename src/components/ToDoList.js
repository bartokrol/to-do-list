import { useState } from "react";
import InputsBox from "../layouts/InputsBox";
import Tasks from "../layouts/Tasks";
import DoneTasks from "../layouts/DoneTasks";
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

	const [editedTask, setEditedTask] = useState({
		isTaskEdited: false,
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
		const target = e.target.id;
		const task = tasks[target];
		const tasksArr = [...tasks];

		if (task.taskVisible === true) {
			task.taskVisible = false;
		} else {
			task.taskVisible = true;
		}

		setTasks([...tasksArr]);
	};

	const handleTaskDelete = (e) => {
		const target = e.target.id;
		const tasksArr = [...tasks];

		for (let task of tasksArr) {
			if (target == task.taskNumber) {
				const taskIndex = tasksArr.indexOf(task);
				tasksArr.splice(taskIndex, 1);
			}
		}

		setTasks([...tasksArr]);
	};

	const handleTaskEdit = (e) => {
		const target = e.target.id;
		const tasksArr = [...tasks];

		for (let task of tasksArr) {
			if (target == task.taskNumber) {
				const taskHeader = task.taskHeader;
				const taskDesc = task.taskDesc;
				setInput({
					taskHeader,
					taskDesc,
				});
			}
		}

		setEditedTask({
			isTaskEdited: true,
		});
	};

	return (
		<div className={`${toDolistClassName}`}>
			<InputsBox
				inputs={inputs}
				change={handleInputChange}
				click={handleTaskSubmit}
				errors={errors}
				toDolistClassName={`${toDolistClassName}`}
				isTaskEdited={editedTask.isTaskEdited}
			/>
			<Tasks
				tasks={tasks}
				toDolistClassName={`${toDolistClassName}`}
				openCloseBtn={handleTaskOpenCloseButton}
				deleteBtn={handleTaskDelete}
				editBtn={handleTaskEdit}
			/>
			<DoneTasks toDolistClassName={`${toDolistClassName}`} />
		</div>
	);
}

export default ToDoList;
