import { useState } from "react";
import "./Calculator.css";   // ⬅ Import CSS file

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleOperation = (op) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) return setResult("Please enter valid numbers");

    switch (op) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        if (b === 0) return setResult("Cannot divide by 0");
        setResult(a / b);
        break;
      default:
        setResult("");
    }
  };

  return (
    <div className="calc-container">
      <h2 className="calc-heading">React Calculator</h2>

      <input
        type="number"
        className="calc-input"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        className="calc-input"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="btn-group">
        <button onClick={() => handleOperation("+")}>+</button>
        <button onClick={() => handleOperation("-")}>-</button>
        <button onClick={() => handleOperation("*")}>×</button>
        <button onClick={() => handleOperation("/")}>÷</button>
      </div>

      <div className="output-box">
        <h3>Result: {result}</h3>
      </div>
    </div>
  );
}
