import Task from "./Task";

const Tasks = ({ tasks }) => {
	const tasksArr = tasks.map((task) => (
		<Task
			key={task.tasknumber}
			header={task.taskHeader}
			desc={task.taskDesc}
		/>
	));
	return <div className="toDoList__tasks">{tasksArr}</div>;
};

export default Tasks;
