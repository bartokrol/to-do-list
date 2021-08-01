import Task from "./Task";
import CompletedTasks from "./CompletedTasks";

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
		<CompletedTasks
			taskNumber={task.taskNumber}
			header={task.taskHeader}
			desc={task.taskDesc}
			visible={task.taskVisible}
			taskClassName={tasksClassName}
			taskOpenCloseClick={openCloseBtn}
			taskCompleted={task.taskCompleted}
		/>
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
			taskCompleted={task.taskCompleted}
		/>
	));
	return (
		<div className={tasksClassName}>
			<h1 className={`${tasksClassName}__title`}>Tasks</h1>
			{tasksArr}
			<h1 className={`${tasksClassName}__title`}>Tasks Done</h1>
			{completedTasksArr}
		</div>
	);
};

export default Tasks;
