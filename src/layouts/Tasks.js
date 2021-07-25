import Task from "./Task";

const Tasks = ({ tasks }) => {
	console.log(tasks);
	const tasksArr = tasks.map((task) => (
		<Task
			key={task.tasknumber}
			header={task.taskHeader}
			desc={task.taskDesc}
		/>
	));
	return tasksArr;
};

export default Tasks;
