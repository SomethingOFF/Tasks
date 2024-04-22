import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex items-center flex-col gap-2 justify-center w-full h-full ">
      <div className="animate-spin">
        <Loader2 />
      </div>
      <div className="font-semibold text-lg animate-pulse">Loading</div>
    </div>
  );
};

export default Loader;
