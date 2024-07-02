import { useAppSelector } from "../redux/hooks/hooks";

const MyComp = () => {
  const count = useAppSelector((state) => state.counter.value);
  return <div>Counter on another component is {count}</div>;
};

export default MyComp;
