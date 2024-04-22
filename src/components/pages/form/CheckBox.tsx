interface FormComponentProps {
  condition: boolean;
}
interface FormItemProps {
  data: FormComponentProps;
  type: string;
  name: string;
  ChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
const CheckBox = ({ data, type, name, ChangeHandler }: FormItemProps) => {
  return (
    <div className="flex items-center relative overflow-visible select-none cursor-pointer gap-3">
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={data["condition"]}
        onChange={ChangeHandler}
        required
      />
      <label htmlFor={name}>i am ready to accept all conditions!</label>
    </div>
  );
};

export default CheckBox;
