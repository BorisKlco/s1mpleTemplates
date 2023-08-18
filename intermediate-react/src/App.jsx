import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const refDom = useRef(null);

  const handleButtonClick = () => {
    setCount((count) => count + 1);
  };
  const handleRefDom = () => {
    refDom.current.focus();
  };

  return (
    <>
      <div></div>
      <h1>Hooks</h1>
      <div className="card">
        <button onClick={handleButtonClick}>count is {count}</button>
      </div>
      <div>
        <input type="text" name="Sample input" ref={refDom} />
        <p>Sample Text</p>
        <p>Sample Text</p>
        <p>Sample Text</p>
        <p>Sample Text</p>
        <button onClick={handleRefDom}>Click for focus</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
