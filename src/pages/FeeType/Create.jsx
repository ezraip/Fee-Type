// import { useState } from 'react';
import Form from "./Form";
import * as Yup from "yup";
import { data } from "./List/data";

export default function Create() {
  // const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (values) => {
    console.log("Create: ", values);
  };

  const validationSchema = Yup.object({
    feeTypeName: Yup.string().required("Fee Type Name is required."),
    feeTypeCode: Yup.string()
      .required("Fee Type Code is required.")
      .test("ok", "Fee Type Code already exists", (code) =>
       !data.some(item => item.code === code)
      ),
  });

  //  if (isLoading) return <Form />;
  return <Form onSubmit={onSubmit} validationSchema={validationSchema} create />;
}
