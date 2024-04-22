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
const RadioButton = ({ data, type, name, ChangeHandler }: FormItemProps) => {
  return (
    <div className="flex items-center relative overflow-visible select-none cursor-pointer gap-3">
      <div> your gender please</div>
      <div>
        {["male", "female", "other"].map((gendername, index) => (
          <div className="flex items-center gap-2" key={index}>
            <input
              type={type}
              name={name}
              id={gendername}
              value={gendername}
              checked={data[name as keyof FormComponentProps] === gendername}
              onChange={ChangeHandler}
              required
            />
            <label htmlFor={gendername}>{gendername}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioButton;
