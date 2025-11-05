// useCount.ts
// : Custom Hooks - 함수/기능

import { useState } from "react";

export function useCount<T extends number>(initialValue: T) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => (prev + 1) as T);
  const decrement = () => setCount(prev => (prev - 1) as T);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}