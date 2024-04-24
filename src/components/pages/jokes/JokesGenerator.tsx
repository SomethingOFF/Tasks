import axios from "axios";
import { Loader } from "lucide-react";
import { useCallback, useState } from "react";

const JokesGenerator = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [isSet, setUp] = useState(false);
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
      setData(response.data);
      response.data.type === "twopart" ? setUp(true) : setUp(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader className=" animate-spin" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-lg">
          <span className="text-red-500">Error Occured : </span>Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Libero, numquam!
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-full p-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">Jokes Generator :</h1>
        <div className="my-4 w-full md:w-3/4 lg:w-[500px] flex flex-col gap-3">
          <h1 className="text-xl font-medium">Jokes</h1>
          <div className="p-2">
            {data?.type === "twopart" ? (
              <>
                <ul>
                  <li className="list-disc">{data?.setup}</li>
                  {isSet && (
                    <button
                      className="bg-blue-400 text-lg font-semibold text-white rounded-lg hover:bg-blue-200 focus:bg-blue-100 focus:text-neutral-700 focus:ring-1 transition-all w-[120px] h-[40px]"
                      onClick={() => setUp(false)}
                    >
                      Next
                    </button>
                  )}
                  {isSet === false && (
                    <li className="list-disc text-blue-800">
                      {data?.delivery}
                    </li>
                  )}
                </ul>
              </>
            ) : (
              <>
                <div>{data?.joke}</div>
              </>
            )}
          </div>
        </div>
        <button
          className="px-2 py-4 bg-blue-400 text-lg font-semibold text-white rounded-lg hover:bg-blue-200 focus:bg-blue-100 focus:text-neutral-700 focus:ring-1 transition-all w-full"
          onClick={fetchData}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default JokesGenerator;
