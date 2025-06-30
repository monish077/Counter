import { useState  } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button className="btn" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="btn" onClick={() => setCount(count - 1)}>Decrement</button>
            <button className="reset btn" onClick={() => setCount(0)}>Reset</button>
            
        </div>
    );
}        
export default Counter;

// This code defines a simple counter component using React.
// It uses the useState hook to manage the count state.
// The component renders the current count and provides buttons to increment, decrement, and reset the count.

//useState - hook
// React.useState is a hook that allows you to add state to a functional component.    // This hook returns an array with two elements: the current state and a function to update it.
// The initial state is set to 0.
//add state to the component

//hooks - special functions that let you use state and other React features in functional components