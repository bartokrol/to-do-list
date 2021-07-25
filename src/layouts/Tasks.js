import Task from "./Task";

const Tasks = ({ tasks, toDolistClassName, click }) => {
	const tasksClassName = `${toDolistClassName}__tasks`;
	const tasksArr = tasks.map((task) => (
		<Task
			taskNumber={task.taskNumber}
			header={task.taskHeader}
			desc={task.taskDesc}
			visible={task.taskVisible}
			taskClassName={tasksClassName}
			taskOpenCloseClick={click}
		/>
	));
	return (
		<div className={tasksClassName}>
			<h1 className={`${tasksClassName}__title`}>Tasks</h1>
			{tasksArr}
		</div>
	);
};

export default Tasks;
