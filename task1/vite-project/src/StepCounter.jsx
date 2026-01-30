import { useState } from "react";

function StepCounter({initialValue = 0, step = 1}) {
    const [count, setCount] = useState(initialValue);
    const[history, setHistory] = useState([]);
    const [operationCount, setOperationCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + step);
        setHistory(prevHistory => [...prevHistory, `Incremented by ${step}`]);
        setOperationCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - step);
        setHistory(prevHistory => [...prevHistory, `Decremented by ${step}`]);
        setOperationCount(prevCount => prevCount + 1);
    };

    const reset = () => {
        setCount(initialValue);
        setHistory([]);
        setOperationCount(prevCount => prevCount + 1);
    }

    const lastFive = history.slice(-5);

    return (
        <div style={{border: '1px solid black', padding: '15px', margin: '10px'}}>
        <h3>StepCounter</h3>
        <p>Current Count: {count}</p>
        <p>Total Operations: {operationCount}</p>

        <button onClick={increment}>increment{step}</button>
        <button onClick={decrement}>decrement{step}</button>
        <button onClick={reset}>reset</button>

        <h4>Last Values</h4>
        <ul>
        {lastFive.map((entry, index) => (
            <li key={index}>{entry}</li>
        ))}
        </ul>
        </div>
    );
}

export default StepCounter;