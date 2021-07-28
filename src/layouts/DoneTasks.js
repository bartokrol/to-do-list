const DoneTasks = ({ toDolistClassName }) => {
	const doneTasksClassName = `${toDolistClassName}__doneTasks`;
	return (
		<div className={doneTasksClassName}>
			<h1 className={`${doneTasksClassName}__title`}>Done Tasks</h1>
		</div>
	);
};

export default DoneTasks;
