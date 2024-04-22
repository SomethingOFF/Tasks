import CheckBox from "./CheckBox";
import FormItem from "./FormItem";
import RadioButton from "./RadioButton";
import SelectBox from "./SelectBox";
import TextArea from "./TextArea";
import UploadImage from "./UploadImage";

const IndexItem = (props: any) => {
  switch (props.type) {
    case "textarea":
      return <TextArea {...props} />;
    case "select":
      return <SelectBox {...props} />;
    case "checkbox":
      return <CheckBox {...props} />;
    case "radio":
      return <RadioButton {...props} />;
    case "file":
      return <UploadImage {...props} />;
    default:
      return <FormItem {...props} />;
  }
};

export default IndexItem;
