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
  return (
    <div>
      <button onClick={handleCountPlus}>+</button>
      <div>count:{count}</div>
      <button onClick={handleCountMinus}>-</button>
      <DateCalc count={count} />
      <button onClick={handleStepPlus}>+</button>
      <div>step:{step}</div>
      <button onClick={handleStepMinus}>-</button>
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
