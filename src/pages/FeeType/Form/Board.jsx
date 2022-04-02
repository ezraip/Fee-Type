import { Button, Col, Form, Row } from "react-bootstrap";

export default function Board({ Field, ErrorMessage }) {
  return (
    <div>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Fee Type Name
        </Form.Label>
        <Col sm={10}>
          <Field
            className="form-control"
            type="text"
            id="feeTypeName"
            name="feeTypeName"
            // {...formik.getFieldProps('feeTypeName')}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.feeTypeName}
          />
          {/* {formik.touched.feeTypeName && formik.errors.feeTypeName ? (
            <Form.Text className="text-muted">
              {formik.errors.feeTypeName}
            </Form.Text>
          ) : null} */}
          <ErrorMessage name="feeTypeName" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Description
        </Form.Label>
        <Col sm={10}>
          <Field
            className="form-control"
            as="textarea"
            rows={3}
            id="description"
            name="description"
            // {...formik.getFieldProps('feeTypeName')}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.description}
          />
          {/* {formik.touched.description && formik.errors.description ? (
            <Form.Text className="text-muted">
              {formik.errors.description}
            </Form.Text>
          ) : null} */}
          <ErrorMessage name="description" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Fee Type Name
        </Form.Label>
        <Col sm={10}>
          <Field
            className="form-control"
            type="text"
            id="feeTypeCode"
            name="feeTypeCode"
            // {...formik.getFieldProps('feeTypeName')}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.feeTypeCode}
          />
          {/* {formik.touched.feeTypeCode && formik.errors.feeTypeCode ? (
            <Form.Text className="text-muted">
              {formik.errors.feeTypeCode}
            </Form.Text>
          ) : null} */}
          <ErrorMessage name="feeTypeCode" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
    </div>
  );
}
