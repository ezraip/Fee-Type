// import { useState } from 'react';
import Form from "./Form";
import * as Yup from "yup";

export default function Create() {
  // const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (values) => {
    console.log("Create: ", values);
  };

  const validationSchema = Yup.object({
    feeTypeName: Yup.string().required("Fee Type Name is required."),
    feeTypeCode: Yup.string().required("Fee Type Code is required."),
  });

  //  if (isLoading) return <Form />;
  return <Form onSubmit={onSubmit} validationSchema={validationSchema} />;
}
