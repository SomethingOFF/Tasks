interface FormItemProps {}
const InputBtn = ({}) => {
  return (
    <div className="flex items-center relative overflow-visible select-none cursor-pointer gap-3">
      <input
        type={"submit"}
        value={"submit"}
        onSubmit={() => {}}
        className="border w-full h-16 bg-gray-400 text-lg font-semibold capitalize rounded-lg hover:bg-gray-100 focus:bg-gray-50"
        required
      />
    </div>
  );
};

export default InputBtn;
