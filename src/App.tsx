import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FormTest from "./Components/Form/Test";

function App() {
	const [count, setCount] = useState(0);

	return <>
    <FormTest />
  </>;
}

export default App;
