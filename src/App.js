import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  function handleCountPlus() {
    setCount(count + step);
  }
  function handleCountMinus() {
    setCount(count - step);
  }
  const [step, setStep] = useState(0);
  function handleStepPlus() {
    setStep(step + 1);
  }
  function handleStepMinus() {
    setStep(step - 1);
  }
  function handleReset() {
    setStep(0);
    setCount(0);
  }
  return (
    <div>
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) => setStep(+e.target.value)}
      ></input>{" "}
      <span>step:{step}</span>
      <div>
        <button onClick={handleCountMinus}>-</button>
        <input
          onChange={(e) => setCount(+e.target.value)}
          type="text"
          min="10"
          max="100"
          value={count}
        />
        <button onClick={handleCountPlus}>+</button>
      </div>
      <DateCalc count={count} />
      <button onClick={handleReset}>reset</button>
    </div>
  );
}

function DateCalc({ count }) {
  const today = new Date();
  today.setDate(today.getDate() + count);
  const pippo = today.toDateString();

  return (
    <div>
      {count} days from today is gonna be {pippo}
    </div>
  );
}
