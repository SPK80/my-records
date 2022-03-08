import Button from "./Button";

export default function ToolsBar({ onAdd }) {
	return (
		<div className="ToolsBar">
			<Button
				caption='Add'
				click={onAdd}
			/>
		</div>
	);
}