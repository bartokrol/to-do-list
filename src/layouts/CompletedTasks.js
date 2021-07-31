const DoneTasks = ({
	taskNumber,
	header,
	desc,
	visible,
	taskOpenCloseClick,
	taskClassName,
	taskCompleted,
}) => {
	const basicClass = `${taskClassName}__completedTask`;
	const visibleTask = visible ? null : "closed";
	const openCloseBtnText = visible ? "Close" : "Open";

	return (
		<div className={`${basicClass} ${visibleTask}`}>
			<div className={`${basicClass}__taskText`}>
				<h1 className={`${basicClass}__taskText__header`}>{header}</h1>
				<p className={`${basicClass}__taskText__desc`}>{desc}</p>
			</div>
			<button
				id={taskNumber}
				value={taskCompleted}
				onClick={taskOpenCloseClick}
				className={`${basicClass}__openCloseBtn`}
			>
				{openCloseBtnText}
			</button>
		</div>
	);
};

export default DoneTasks;
