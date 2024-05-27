import { useState } from "react";

const useCounter = () => {
  let [count, setCount] = useState(0);

  const IncreaseCount = () => {
    setCount((count += 1));
  };
  const DecreaseCount = () => {
    setCount((count -= 1));
  };
  const CountByFive = () => {
    setCount(count * 5);
  };
  return {
    IncreaseCount,
    DecreaseCount,
    CountByFive,
    count,
  };
};

export default useCounter;
