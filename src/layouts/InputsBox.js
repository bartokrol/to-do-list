import TaskTitle from "./TaskTitle";
import TaskDesc from "./TaskDesc";

const InputsBox = ({
	inputs,
	change,
	addClick,
	editClick,
	errors,
	toDolistClassName,
	isTaskEdited,
}) => {
	const inputsBoxClassName = `${toDolistClassName}__inputsBox`;
	const editBtn = (
		<button className={`${inputsBoxClassName}__addBtn`} onClick={editClick}>
			Edit
		</button>
	);
	const addBtn = (
		<button className={`${inputsBoxClassName}__addBtn`} onClick={addClick}>
			Add
		</button>
	);
	const addEditBtn = isTaskEdited ? editBtn : addBtn;
	return (
		<div className={inputsBoxClassName}>
			<TaskTitle
				taskHeader={inputs.taskHeader}
				change={change}
				taskHeaderError={errors.taskHeaderError}
				taskHeaderMessage={errors.taskHeaderMessage}
				inputsBoxClassName={inputsBoxClassName}
			/>
			<TaskDesc
				taskDesc={inputs.taskDesc}
				change={change}
				taskDescError={errors.taskDescError}
				taskDescMessage={errors.taskDescMessage}
				inputsBoxClassName={inputsBoxClassName}
			/>
			{addEditBtn}
		</div>
	);
};

export default InputsBox;
