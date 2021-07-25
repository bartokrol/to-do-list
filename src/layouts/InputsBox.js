import TaskTitle from "./TaskTitle";
import TaskDesc from "./TaskDesc";

const InputsBox = ({ inputs, change, click, errors }) => {
	return (
		<div className="toDoList__inputsBox">
			<TaskTitle
				taskHeader={inputs.taskHeader}
				change={change}
				taskHeaderError={errors.taskHeaderError}
			/>
			<TaskDesc
				taskDesc={inputs.taskDesc}
				change={change}
				taskDescError={errors.taskDescError}
			/>
			<button className="toDoList__inputsBox__addBtn" onClick={click}>
				Add
			</button>
		</div>
	);
};

export default InputsBox;
