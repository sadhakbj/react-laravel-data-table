import React, { useState } from "react";

const App = () => {
    const [count, setCount] = useState(1);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button
                onClick={() => setCount(count + 1)}
                className="btn btn-primary"
            >
                +
            </button>
            <button
                onClick={() => setCount(count - 1)}
                className="btn btn-danger"
            >
                -
            </button>
        </div>
    );
};

export default App;
