import Task from "./Task";

const Tasks = ({ tasks, toDolistClassName }) => {
	const tasksClassName = `${toDolistClassName}__tasks`;
	const tasksArr = tasks.map((task) => (
		<Task
			key={task.tasknumber}
			header={task.taskHeader}
			desc={task.taskDesc}
			taskClassName={tasksClassName}
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
