import { useState } from "react";
import logo from "./logo.svg";
import Form from "./components/Form";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="flex h-screen w-full items-center justify-center  p-4">
			<Form />
		</div>
	);
}

export default App;
