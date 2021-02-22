import React, { useState } from "react";

const App = () => {
    const [count, setCount] = useState(1);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
};

export default App;
