"use client";

import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);

  return (
    <div>
      <p data-cy="counter">{counter}</p>
      <button data-cy="add-button" type="button" onClick={increase}>
        +
      </button>
      <button data-cy="sub-button" type="button" onClick={decrease}>
        -
      </button>
    </div>
  );
}
