export function NotAllowed() {
	return (
		<div className="border">
			<div className="border-b p-4">
				<h2 className="font-bold">Not allowed to change the context</h2>
			</div>
			<div className="flex flex-col gap-4 p-4">
				<p>Please use a deploy preview to test this functionality</p>
			</div>
		</div>
	);
}
