const DoneTasks = ({ completedTasks, toDolistClassName }) => {
	const basicClass = `${toDolistClassName}__task`;
	// const visibleTask = visible ? null : "closed";
	// const openCloseBtnText = visible ? "Close" : "Open";

	// ${visibleTask}
	const completedTasksArr = completedTasks.map((task) => (
		<div className={`${basicClass} `}>
			<div className={`${basicClass}__taskText`}>
				<h1 className={`${basicClass}__taskText__header`}>
					{task.taskHeader}
				</h1>
				<p className={`${basicClass}__taskText__desc`}>
					{task.taskDesc}
				</p>
			</div>
		</div>
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
	// return (
	// 	<div className={doneTasksClassName}>
	// 		<h1 className={`${doneTasksClassName}__title`}>Done Tasks</h1>
	// 		{completedTasksArr}
	// 	</div>
	// );
};

export default DoneTasks;
