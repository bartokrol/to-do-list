const Task = ({
	taskNumber,
	header,
	desc,
	visible,
	taskOpenCloseClick,
	taskClassName,
}) => {
	const basicClass = `${taskClassName}__task`;
	const visibleTask = visible ? null : "closed";
	const openCloseBtnText = visible ? "Close" : "Open";

	return (
		<div className={`${basicClass} ${visibleTask}`}>
			<div className={`${basicClass}__taskText`}>
				<h1 className={`${basicClass}__taskText__header`}>{header}</h1>
				<p className={`${basicClass}__taskText__desc`}>{desc}</p>
			</div>
			<div className={`${basicClass}__buttons`}>
				<button className={`${basicClass}__buttons__confirm`}></button>
				<button className={`${basicClass}__buttons__edit`}></button>
				<button className={`${basicClass}__buttons__delete`}></button>
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

export default Task;
