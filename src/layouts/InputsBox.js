import TaskTitle from "./TaskTitle";
import TaskDesc from "./TaskDesc";

const InputsBox = ({ inputs, change, click, errors, toDolistClassName }) => {
	const inputsBoxClassName = `${toDolistClassName}__inputsBox`;
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
				Add
			</button>
		</div>
	);
};

export default InputsBox;
