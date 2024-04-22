interface FormComponentProps {
  gender: string;
}
interface FormItemProps {
  data: FormComponentProps;
  type: string;
  name: string;
  ChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
const TextArea = ({ data, name, ChangeHandler }: FormItemProps) => {
  return (
    <div className="flex items-center relative overflow-visible select-none cursor-pointer gap-3">
      <textarea
        className="w-full h-20 border p-2 rounded-lg"
        onChange={ChangeHandler}
        name={name}
        value={data[name as keyof FormComponentProps]}
        required
      >
        jod
      </textarea>
    </div>
  );
};

export default TextArea;
