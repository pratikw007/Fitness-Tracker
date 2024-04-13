import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);


  const touch = () => {
    setCount((count) => count + 1)
  }

  return (
    <>
      <div className="card">
        <button onClick={touch}>
           {count}
        </button>
      </div>
    </>
  );
}

export default App;
