import { useState, useRef, useMemo, useEffect } from "react";
import "./App.css";

const fibonacci = (n) => {
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

function App() {
  const [count, setCount] = useState(23);
  const [left, setLeft] = useState(0);
  const refDom = useRef(null);
  const memoexample = useMemo(() => fibonacci(count), [count]);

  useEffect(() => {
    requestAnimationFrame(animate);
    function animate() {
      setLeft(left + 1);
    }
  }, [left]);

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

      <div>
        <p>useMemo example</p>
        <div
          style={{ left: `${Math.sin(left * 0.05) * 100 + 100}px` }}
          className="ball"
        ></div>
        <p>current fibonacci num {memoexample}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
