import { Link } from "react-router-dom";
import { Card, Row, Button } from "react-bootstrap";
import { Breadcrumb } from "../../../components";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import Board from "./Board";

export default function Form({
  initialValues = {
    feeTypeName: "",
    description: "",
    feeTypeCode: "",
  },
  onSubmit,
  validationSchema,
}) {
  return (
    <div className="content container-2xl">
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
      <Row>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <FormikForm>
            <Card className="fee-type-card card-shadow">
              <Board Field={Field} ErrorMessage={ErrorMessage} />
            </Card>
            <div className="mt-3">
              <Button className="save-btn" type="submit">Save</Button>
              <Button as={Link} to={'/fee-type'} className="cancel-btn">Cancel</Button>
            </div>
          </FormikForm>
        </Formik>
      </Row>
    </div>
  );
}
