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
		taskHeaderMessage: "",
		taskDescError: false,
		taskDescMessage: "",
	});

	const [tasks, setTasks] = useState([]);

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

	const handleTaskSubmit = () => {
		const { taskHeader, taskDesc } = inputs;
		let {
			taskHeaderError,
			taskDescError,
			taskHeaderMessage,
			taskDescMessage,
		} = errors;
		const taskArr = tasks;
		const taskNumber = tasks.length;
		const taskVisible = true;
		const taskCompleted = false;

		[taskHeaderError, taskDescError, taskHeaderMessage, taskDescMessage] =
			checkInputsForErrors(
				taskHeader,
				taskDesc,
				taskHeaderError,
				taskDescError,
				taskHeaderMessage,
				taskDescMessage
			);

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
			taskHeaderMessage,
			taskDescMessage,
		});
	};

	const findTaskIndex = (target, tasksArr) => {
		for (let task of tasksArr) {
			if (target == task.taskNumber) {
				const taskIndex = tasksArr.indexOf(task);
				return taskIndex;
			}
		}
	};

	const handleTaskVisibility = (tasksArr, target) => {
		const arr = [...tasksArr];
		const taskIndex = findTaskIndex(target, arr);
		const task = tasksArr[taskIndex];
		if (task.taskVisible === true) {
			task.taskVisible = false;
		} else {
			task.taskVisible = true;
		}
		return arr;
	};

	const handleTaskOpenCloseButton = (e) => {
		const target = e.target.id;
		const taskCompleted = e.target.value;

		if (taskCompleted === "true") {
			const arr = handleTaskVisibility(completedTasks, target);
			setCompletedTasks([...arr]);
		}

		if (taskCompleted === "false") {
			const arr = handleTaskVisibility(tasks, target);
			setTasks([...arr]);
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

	const checkInputsForErrors = (
		taskHeader,
		taskDesc,
		taskHeaderError,
		taskDescError,
		taskHeaderMessage,
		taskDescMessage
	) => {
		if (taskHeader.length < 3) {
			taskHeaderError = true;
			taskHeaderMessage = "Title has to be longer than 3 signs.";
		} else {
			taskHeaderError = false;
			taskHeaderMessage = "";
		}

		if (taskDesc.length < 11) {
			taskDescError = true;
			taskDescMessage = "Description has to be longer than 10 signs.";
		} else {
			taskDescError = false;
			taskDescMessage = "";
		}

		return [
			taskHeaderError,
			taskDescError,
			taskHeaderMessage,
			taskDescMessage,
		];
	};

	const handleTaskEditInsideInputsBox = () => {
		const taskToEdit = editedTask.editedTask;
		const taskHeader = inputs.taskHeader;
		const taskDesc = inputs.taskDesc;
		let {
			taskHeaderError,
			taskDescError,
			taskHeaderMessage,
			taskDescMessage,
		} = errors;

		[taskHeaderError, taskDescError, taskHeaderMessage, taskDescMessage] =
			checkInputsForErrors(
				taskHeader,
				taskDesc,
				taskHeaderError,
				taskDescError,
				taskHeaderMessage,
				taskDescMessage
			);

		setError({
			taskHeaderError,
			taskDescError,
			taskHeaderMessage,
			taskDescMessage,
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
		</div>
	);
}

export default ToDoList;
