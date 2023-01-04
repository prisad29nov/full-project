import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Routing from "./components/Routing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routing />
    </div>
  );
}

export default App;
