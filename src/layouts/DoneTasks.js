import Task from "./Task";

const DoneTasks = ({ completedTasks, toDolistClassName }) => {
	const doneTasksClassName = `${toDolistClassName}__doneTasks`;
	const completedTasksArr = completedTasks.map((task) => (
		<>
			<h1>{task.taskHeader}</h1>
			<h2>{task.taskDesc}</h2>
		</>
	));
	//
	// <Task
	// 	taskNumber={task.taskNumber}
	// 	header={task.taskHeader}
	// 	desc={task.taskDesc}
	// 	visible={task.taskVisible}
	// 	taskClassName={tasksClassName}
	// 	taskOpenCloseClick={openCloseBtn}
	// 	taskDeleteClick={deleteBtn}
	// 	taskEditClick={editBtn}
	// 	taskConfirmClick={confirmBtn}
	// />
	return (
		<div className={doneTasksClassName}>
			<h1 className={`${doneTasksClassName}__title`}>Done Tasks</h1>
			{completedTasksArr}
		</div>
	);
};

export default DoneTasks;
