import { Earth, MoveRight } from "lucide-react";
import { Routes } from "./Route";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="h-full w-full flex justify-center items-center flex-col select-none">
      <div className="flex justify-center flex-col gap-3 w-4/5">
        <div className="flex items-center gap-1">
          <div className="text-blue-900 flex items-center justify-center">
            <Earth className="aspect-square w-10 h-8 md:h-10 lg:h-12" />
          </div>
          <div className="text-blue-900 font-semibold text-2xl">
            Welcome to My World
          </div>
        </div>
        <p className="text-md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque qui
          nostrum consequatur? Ullam adipisci perferendis repellat consequatur,
          a saepe quaerat.
        </p>
        <div className="flex flex-col">
          <div className="h-16 font-semibold text-lg flex items-center">
            Explore My World
          </div>
          <div className="max-h-[350px] flex flex-wrap items-center justify-center gap-2 overflow-y-auto py-4 px-1">
            {Routes.map(({ Icon, name, url }, index) => (
              <Link to={url} key={index} className="sm:w-full md:w-fit">
                <div className="flex items-center gap-2 group bg-blue-100 hover:bg-blue-50 hover:opacity-80 ring-2 ring-transparent transition-all hover:ring-blue-300 px-4 py-3 rounded-md hover:text-blue-800">
                  <div className="group-hover:scale-[1.2]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="mx-2 text-md sm:w-full md:w-auto font-semibold line-clamp-1">
                    {name}
                  </div>
                  <div className="relative">
                    <div className="absolute group-hover:animate-ping">
                      <MoveRight className="w-5 h-5" />
                    </div>
                    <div>
                      <MoveRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
