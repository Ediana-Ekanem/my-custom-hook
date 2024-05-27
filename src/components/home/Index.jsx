import useCounter from "../counter/Counter";
const Index = () => {
  let { count, IncreaseCount, DecreaseCount, CountByFive } = useCounter();
  return (
    <div>
      <h1>Home</h1>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center">
          <h1>{count}</h1>

          <div className="flex gap-5 mt-5">
            <button
              className="bg-slate-500 py-2 px-3 text-white rounded"
              onClick={() => IncreaseCount()}
            >
              Increase Count
            </button>
            <button
              className="bg-slate-500 py-2 px-3 text-white rounded"
              onClick={() => DecreaseCount()}
            >
              Decrease Count
            </button>
            <button
              className="bg-slate-500 py-2 px-3 text-white rounded"
              onClick={() => CountByFive()}
            >
              Increase by 5 Count
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
