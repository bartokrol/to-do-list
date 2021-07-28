import TaskTitle from "./TaskTitle";
import TaskDesc from "./TaskDesc";

const InputsBox = ({
	inputs,
	change,
	click,
	errors,
	toDolistClassName,
	isTaskEdited,
}) => {
	console.log(isTaskEdited);
	const inputsBoxClassName = `${toDolistClassName}__inputsBox`;
	const addBtnText = isTaskEdited ? "Edit" : "Add";
	return (
		<div className={inputsBoxClassName}>
			<TaskTitle
				taskHeader={inputs.taskHeader}
				change={change}
				taskHeaderError={errors.taskHeaderError}
				inputsBoxClassName={inputsBoxClassName}
			/>
			<TaskDesc
				taskDesc={inputs.taskDesc}
				change={change}
				taskDescError={errors.taskDescError}
				inputsBoxClassName={inputsBoxClassName}
			/>
			<button className={`${inputsBoxClassName}__addBtn`} onClick={click}>
				{addBtnText}
			</button>
		</div>
	);
};

export default InputsBox;
