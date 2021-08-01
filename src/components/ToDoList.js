import { useState } from "react";
import InputsBox from "../layouts/InputsBox";
import Tasks from "../layouts/Tasks";
import DoneTasks from "../layouts/CompletedTasks";
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
			taskCompleted: false,
		},
	]);

	const [editedTask, setEditedTask] = useState({
		isTaskEdited: false,
		editedTask: {},
	});

	const [completedTasks, setCompletedTasks] = useState([]);

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
		const taskCompleted = false;

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
			taskArr.push({
				taskHeader,
				taskDesc,
				taskNumber,
				taskVisible,
				taskCompleted,
			});
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
		const taskCompleted = e.target.value;

		if (taskCompleted === "true") {
			const task = completedTasks[target];
			const tasksArr = [...completedTasks];
			if (task.taskVisible === true) {
				task.taskVisible = false;
			} else {
				task.taskVisible = true;
			}
			setCompletedTasks([...tasksArr]);
		}

		if (taskCompleted === "false") {
			const task = tasks[target];
			const tasksArr = [...tasks];
			if (task.taskVisible === true) {
				task.taskVisible = false;
			} else {
				task.taskVisible = true;
			}
			setTasks([...tasksArr]);
		}
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
				const editedTask = task;
				const taskHeader = task.taskHeader;
				const taskDesc = task.taskDesc;
				setInput({
					taskHeader,
					taskDesc,
				});
				setEditedTask({
					isTaskEdited: true,
					editedTask,
				});
			}
		}

		setError({
			taskHeaderError: false,
			taskDescError: false,
		});
	};

	const handleTaskEditInsideInputsBox = () => {
		const taskToEdit = editedTask.editedTask;
		const taskHeader = inputs.taskHeader;
		const taskDesc = inputs.taskDesc;
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

		setError({
			taskHeaderError,
			taskDescError,
		});

		if (!taskHeaderError && !taskDescError) {
			taskToEdit.taskHeader = taskHeader;
			taskToEdit.taskDesc = taskDesc;
			setInput({ taskHeader: "", taskDesc: "" });
			setEditedTask({
				isTaskEdited: false,
				editedTask: {},
			});
		}
	};

	const handleTaskConfirm = (e) => {
		const target = e.target.id;
		const tasksArr = [...tasks];
		const completedTasksArr = [...completedTasks];

		for (let task of tasksArr) {
			if (target == task.taskNumber) {
				const taskIndex = tasksArr.indexOf(task);
				tasksArr[taskIndex].taskCompleted = true;
				tasksArr.splice(taskIndex, 1);
				completedTasksArr.push(task);
			}
		}

		setTasks([...tasksArr]);
		setCompletedTasks([...completedTasksArr]);
	};

	return (
		<div className={`${toDolistClassName}`}>
			<InputsBox
				inputs={inputs}
				change={handleInputChange}
				addClick={handleTaskSubmit}
				editClick={handleTaskEditInsideInputsBox}
				errors={errors}
				toDolistClassName={`${toDolistClassName}`}
				isTaskEdited={editedTask.isTaskEdited}
			/>
			<Tasks
				tasks={tasks}
				completedTasks={completedTasks}
				toDolistClassName={`${toDolistClassName}`}
				openCloseBtn={handleTaskOpenCloseButton}
				deleteBtn={handleTaskDelete}
				editBtn={handleTaskEdit}
				confirmBtn={handleTaskConfirm}
			/>
			{/* <DoneTasks
				completedTasks={completedTasks}
				toDolistClassName={`${toDolistClassName}`}
			/> */}
		</div>
	);
}

export default ToDoList;
