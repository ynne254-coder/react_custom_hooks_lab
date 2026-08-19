import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Form() {
	const [name, setName] = useLocalStorage("name");
	const [serviceNumber, setServiceNumber] = useLocalStorage("serviceNumber");

	return (
		<form>
			<label htmlFor="name">Name</label>
			<input
				id="name"
				data-testid="name"
				placeholder="Enter your name"
				value={name ?? ""}
				onChange={(event) => setName(event.target.value)}
			/>

			<label htmlFor="serviceNumber">Service number</label>
			<input
				id="serviceNumber"
				data-testid="serviceNumber"
				value={serviceNumber ?? ""}
				onChange={(event) => setServiceNumber(event.target.value)}
			/>
		</form>
	);
}
