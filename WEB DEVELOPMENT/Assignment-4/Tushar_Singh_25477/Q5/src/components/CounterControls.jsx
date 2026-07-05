import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice";

function CounterControls() {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 p-4">
      <button onClick={() => dispatch(increment())} className="bg-green-600 text-white px-3 py-1 rounded">
        +
      </button>
      <button onClick={() => dispatch(decrement())} className="bg-red-600 text-white px-3 py-1 rounded">
        -
      </button>
      <button onClick={() => dispatch(reset())} className="bg-gray-600 text-white px-3 py-1 rounded">
        Reset
      </button>
    </div>
  );
}

export default CounterControls;
