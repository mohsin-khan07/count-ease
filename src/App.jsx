import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        <p className="read-the-docs">Total Count = {count}</p>
        <button onClick={count > 0 ? () => setCount((count) => count - 1) : ""}>
          -
        </button>
      </div>
    </>
  );
}

export default App;
