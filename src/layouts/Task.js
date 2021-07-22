const Task = ({ header, desc }) => {
	return (
		<div>
			<h1>{header}</h1>
			<p>{desc}</p>
		</div>
	);
};

export default Task;
