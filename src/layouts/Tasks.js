import Task from "./Task";

const Tasks = ({
	tasks,
	completedTasks,
	toDolistClassName,
	openCloseBtn,
	deleteBtn,
	editBtn,
	confirmBtn,
}) => {
	const tasksClassName = `${toDolistClassName}__tasks`;
	const completedTasksArr = completedTasks.map((task) => (
		<div className={`${toDolistClassName} `}>
			<div className={`${toDolistClassName}__taskText`}>
				<h1 className={`${toDolistClassName}__taskText__header`}>
					{task.taskHeader}
				</h1>
				<p className={`${toDolistClassName}__taskText__desc`}>
					{task.taskDesc}
				</p>
			</div>
		</div>
	));

	const tasksArr = tasks.map((task) => (
		<Task
			taskNumber={task.taskNumber}
			header={task.taskHeader}
			desc={task.taskDesc}
			visible={task.taskVisible}
			taskClassName={tasksClassName}
			taskOpenCloseClick={openCloseBtn}
			taskDeleteClick={deleteBtn}
			taskEditClick={editBtn}
			taskConfirmClick={confirmBtn}
		/>
	));
	return (
		<div className={tasksClassName}>
			<h1 className={`${tasksClassName}__title`}>Tasks</h1>
			{tasksArr}
			<h1 className={`${tasksClassName}__title`}>Done Tasks</h1>
			{completedTasksArr}
		</div>
	);
};

export default Tasks;
