import { Card, Row } from "react-bootstrap";
import { Breadcrumb } from "../../../components";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Board from "./Board";

const initialValues = {
  feeTypeName: "",
  description: "",
  feeTypeCode: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  feeTypeName: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  feeTypeCode: Yup.string().required("Required"),
});

export default function Form() {
  return (
    <div className="content">
      <Breadcrumb
        firstContent={{ name: "Master Data Management", link: "#" }}
        content={[
          { name: "Fee Type", link: "/fee-type" },
          { name: "Edit Fee Type", link: false },
        ]}
      />
      <div style={{ marginTop: "10px", marginBottom: "30px" }}>
        <h2>Edit Fee Type</h2>
      </div>
      <Card className="fee-type-card card-shadow">
        <Row>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <FormikForm>
              <Board Field={Field} ErrorMessage={ErrorMessage} />
            </FormikForm>
          </Formik>
        </Row>
      </Card>
    </div>
  );
}
