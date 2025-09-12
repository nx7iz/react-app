//

import { useState } from "react";

function Counter() {
  // let count = 0;
  const [count, setCount] = useState(0);

  return (
    <>
      <h4 className={(count >= 0 && "text-success") || "text-danger"}>
        {count === 0 ? "Counter is at zero" : count}
      </h4>

      <button
        className="btn btn-success"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </button>
      <button
        className="btn btn-success"
        onClick={() => setCount((prev) => prev + 5)}
      >
        +5
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setCount((prev) => prev - 1)}
        disabled={count === 0}
      >
        Decrement
      </button>
      <button className="btn btn-secondary" onClick={() => setCount(0)}>
        Reset
      </button>
    </>
  );
}

export default Counter;
