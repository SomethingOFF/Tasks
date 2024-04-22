import React, { useCallback, useState } from "react";
import IndexItem from "./IndexItem";
import InputBtn from "./InputBtn";

interface FormComponentProps {
  email: string;
  username: string;
  password: string | number;
  image: string;
  gender: string;
  condition: boolean;
  country: string;
}

const items = [
  {
    name: "username",
    type: "text",
    typename: "username",
  },
  {
    name: "email",
    type: "email",
    typename: "email",
  },
  {
    name: "password",
    type: "password",
    typename: "password",
  },
  {
    name: "image",
    type: "file",
    typename: "image",
  },
  {
    name: "gender",
    type: "radio",
    typename: "gender",
  },
  {
    name: "country",
    type: "select",
    typename: "country",
  },
  {
    name: "feedback",
    type: "textarea",
    typename: "feedback",
  },
  {
    name: "condition",
    type: "checkbox",
    typename: "gender",
  },
];
const FormSubmission = () => {
  const [data, setData] = useState<FormComponentProps>({
    email: "",
    username: "",
    password: "",
    image: "",
    gender: "male",
    condition: false,
    country: "",
  });
  const ChangeHandler = useCallback(
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value, files, checked } = event.target as HTMLInputElement;
      let url: string;
      if (files) {
        url = URL.createObjectURL(files[0]);
      }
      setData((prev) => ({
        ...prev,
        [name]: name === "image" ? url : name === "condition" ? checked : value,
      }));
    },
    []
  );
  const onSubmitHandler = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      alert("form is submitted");
    },
    [data]
  );
  console.log(data);
  return (
    <div className="flex items-center justify-center w-full h-full gap-4 p-10">
      <div className="lg:w-1/2 w-full h-full font-semibold">
        <form
          className="w-full h-full py-2 flex flex-col gap-5 overflow-y-auto"
          onSubmit={onSubmitHandler}
        >
          {items.map((item: any, index) => (
            <IndexItem
              {...item}
              ChangeHandler={ChangeHandler}
              data={data}
              key={index}
            />
          ))}
          <InputBtn />
        </form>
      </div>
      <div className="w-1/2 h-full lg:flex hidden rounded-md overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1713208176490-3ac46ac160a8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default FormSubmission;
