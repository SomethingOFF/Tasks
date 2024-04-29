import { useCallback, useState } from "react";

const DiceRoll = () => {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(0);
  const rolling = useCallback(() => {
    setLoading(true);
    let id = 1 + Math.floor(Math.random() * 6);
    setTimeout(() => {
      setId(id);
      setLoading(false);
    }, 500);
  }, [id]);
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <div className="border h-20 w-20 flex items-center justify-center font-medium text-lg rounded-full">
        {id}
      </div>
      <button
        className={`bg-blue-500 px-4 py-3 rounded-lg text-white text-lg ${
          loading ? "bg-blue-300" : ""
        }`}
        onClick={rolling}
      >
        {loading ? "Rolling..." : "You wann Roll?"}
      </button>
    </div>
  );
};

export default DiceRoll;
