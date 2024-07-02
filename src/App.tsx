import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import { RootState } from "./redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/slices/counter/counterSlice";
import MyComp from "./component/MyComp";

function App() {
  const count = useAppSelector((state: RootState) => state.counter.value);

  const dispatch = useAppDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const incrementByValue = (value: number) => {
    dispatch(incrementByAmount(value));
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Count is {count}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={() => incrementByValue(5)}>IncrementBy5</button>

      <div style={{ marginTop: 100, backgroundColor: "black", color: "white", padding:20, borderRadius:20 }}>
        <MyComp />
      </div>
    </>
  );
}

export default App;
