import Form from "./Form";
import { useLocation } from "react-router-dom";
import * as Yup from "yup";

export default function Edit() {
  // const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const data = location.state;

  const onSubmit = (values) => {
    console.log("Edit", values);
  };

  const validationSchema = Yup.object({
    feeTypeName: Yup.string().required("Fee Type Name is required."),
    feeTypeCode: Yup.string().required("Fee Type Code is required."),
  });

  //  if (isLoading) return <LoadingPage />;
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={data}
      validationSchema={validationSchema}
    />
  );
}
