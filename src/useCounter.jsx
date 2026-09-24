import { useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(1);

  const increment = () => setCount((prev) => prev + 1);

  const decrement = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : prev));
  };
  
  return { count, increment, decrement };
}
