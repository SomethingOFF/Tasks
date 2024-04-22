import { useRef } from "react";

interface FormComponentProps {
  email: string;
  name: string;
  password: string | number;
}
interface FormItemProps {
  data: FormComponentProps;
  type: string;
  name: string;
  ChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
const FormItem = ({ ChangeHandler, name, data, type }: FormItemProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="flex items-center relative overflow-visible select-none cursor-pointer">
      <input
        ref={ref}
        type={type}
        className={`w-full h-full border p-3 rounded-lg border-gray-500 focus:border-gray-200 outline-none peer transition-all text-lg text-neutral-500 cursor-pointer font-medium pr-10 ${
          data[name as keyof FormComponentProps]
            ? "border-blue-500 focus:border-blue-200"
            : ""
        }`}
        name={name}
        id=""
        value={data[name as keyof FormComponentProps]}
        onChange={ChangeHandler}
        autoComplete="off"
        required
      />
      <label
        htmlFor={name}
        className={`absolute translate-x-4 px-1 peer-focus:px-3 text-neutral-500 peer-focus:-translate-y-[50%] peer-focus:top-0 transition-all peer-focus:bg-white ${
          data[name as keyof FormComponentProps]
            ? "-translate-y-[50%] top-0 bg-white"
            : ""
        }
        ${data[name as keyof FormComponentProps] ? "text-blue-500" : ""}`}
      >
        {name}
      </label>
    </div>
  );
};

export default FormItem;
