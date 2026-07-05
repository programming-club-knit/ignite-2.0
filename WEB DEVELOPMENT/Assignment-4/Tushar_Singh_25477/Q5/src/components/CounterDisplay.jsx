import { useSelector } from "react-redux";

function CounterDisplay() {
  const count = useSelector((state) => state.counter.value);

  return <h2 className="text-xl font-bold p-4">Count: {count}</h2>;
}

export default CounterDisplay;
