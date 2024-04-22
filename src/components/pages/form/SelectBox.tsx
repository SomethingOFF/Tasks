interface FormComponentProps {
  country: string;
}
interface FormItemProps {
  data: FormComponentProps;
  name: string;
  ChangeHandler: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}
const SelectBox = ({ ChangeHandler, name, data }: FormItemProps) => {
  return (
    <div className="flex items-center relative overflow-visible select-none cursor-pointer">
      <select onChange={ChangeHandler} name={name} required>
        <option value={"option1"}>option1</option>
        <option value={"option2"}>option2</option>
        <option value={"option3"}>option3</option>
        <option value={"option4"}>option4</option>
      </select>
    </div>
  );
};

export default SelectBox;
