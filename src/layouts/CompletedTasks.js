const DoneTasks = ({
	taskNumber,
	header,
	desc,
	visible,
	toDolistClassName,
	taskOpenCloseClick,
	taskClassName,
}) => {
	const basicClass = `${taskClassName}__completedTask`;
	const visibleTask = visible ? null : "closed";
	const openCloseBtnText = visible ? "Close" : "Open";

	return (
		<div className={`${toDolistClassName} `}>
			<div className={`${toDolistClassName}__taskText`}>
				<h1 className={`${toDolistClassName}__taskText__header`}>
					{header}
				</h1>
				<p className={`${toDolistClassName}__taskText__desc`}>{desc}</p>
			</div>
			<button
				id={taskNumber}
				onClick={taskOpenCloseClick}
				className={`${basicClass}__openCloseBtn`}
			>
				{openCloseBtnText}
			</button>
		</div>
	);
};

export default DoneTasks;
