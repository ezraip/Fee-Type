import Form from "./Form";
import { useLocation } from "react-router-dom";
import * as Yup from "yup";
import { data } from "./List/data";

export default function Edit() {
  // const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const dataFee = location.state;

  const onSubmit = (values) => {
    console.log("Edit", values);
  };

  const validationSchema = Yup.object({
    feeTypeName: Yup.string().required("Fee Type Name is required."),
    feeTypeCode: Yup.string()
      .required("Fee Type Code is required.")
      .test(
        "ok",
        "Fee Type Code already exists",
        (code) => !data.some((item) => item.code === code)
      ),
  });

  //  if (isLoading) return <LoadingPage />;
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={dataFee}
      validationSchema={validationSchema}
    />
  );
}
