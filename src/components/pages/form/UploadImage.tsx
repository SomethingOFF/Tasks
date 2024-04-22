import { Image, X } from "lucide-react";

interface FormComponentProps {
  image: string;
}
interface FormItemProps {
  data: FormComponentProps;
  type: string;
  name: string;
  ChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
const UploadImage = ({ data, name, type, ChangeHandler }: FormItemProps) => {
  return (
    <div className="flex items-center relative overflow-visible select-none cursor-pointer h-[300px] w-fit">
      <input
        type={type}
        src=""
        alt=""
        name={name}
        id={name}
        onChange={ChangeHandler}
        className="absolute w-full h-full opacity-0 peer"
        required
      />
      <label
        className="w-fit h-full z-50 border cursor-pointer border-gray-500 peer-hover:border-blue-500 rounded-lg group overflow-hidden"
        htmlFor={name}
      >
        {data.image ? (
          <>
            <div className="w-fit h-full relative">
              <img
                src={data.image}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            <div className="absolute w-full h-full group-hover:bg-black/50 top-0 right-0 group-hover:visible group-hover:opacity-100 opacity-0 invisible rounded-lg">
              <div className="w-full h-full flex items-center justify-center z-50 text-white">
                Do you Wanna change?
              </div>
            </div>
          </>
        ) : (
          <div className="h-full w-full flex items-center justify-center flex-col gap-4 ">
            <div className="h-20 w-20 flex items-center justify-center group-hover:text-blue-400 transition-all">
              <Image className="w-full h-full outline-1" />
            </div>
            <div className="font-semibold text-xl group-hover:text-blue-400 transition-all">
              Add An Image
            </div>
          </div>
        )}
      </label>
    </div>
  );
};

export default UploadImage;
