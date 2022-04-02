import { Card, Col, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Board({ Field, ErrorMessage }) {
  return (
    <div>
      <Row style={{ marginBottom: "133px" }}>
        <Col>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column lg={4}>
              Fee Type Name
            </Form.Label>
            <Col lg={8}>
              <Field
                className="form-control fee-type-name-form"
                type="text"
                id="feeTypeName"
                name="feeTypeName"
                maxLength={256}
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
              <ErrorMessage className="errorMessage" name="feeTypeName" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column lg={4}>
              Description
            </Form.Label>
            <Col lg={8}>
              <Field
                className="form-control fee-type-description-form"
                as="textarea"
                rows={3}
                id="description"
                name="description"
                maxLength={4000}
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
        </Col>
        <Col>
          <div
            className="interface-purpose-box"
            // style={{ backgroundColor: "red" }}
          >
            <h3>For Interface Purpose</h3>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column lg={6}>
                Fee Type Name
              </Form.Label>
              <Col lg={6}>
                <Field
                  className="form-control fee-type-code-form"
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
          </div>
        </Col>
      </Row>
      <Row>
        <div>
          <h3>Translation</h3>
          <hr></hr>
          <div className="d-flex translation">
            <div className="d-flex flex-column">
              <button
                type="button"
                className="translation-btn d-flex align-items-center"
              >
                <span>Indonesia</span>
              </button>
              <button
                type="button"
                className="translation-btn inactive d-flex align-items-center"
              >
                <span>Chinese Simplified</span>
                <div className="icon-danger px-2">
                  <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" />
                </div>
              </button>
              <div className="h-100 align-items-center d-flex">
                <div className="d-flex align-items-center">
                  <span className="note-danger">Note:</span>
                  <div className="icon-danger px-2">
                    <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" />
                  </div>
                  <span className="note-danger">Incomplete data</span>
                </div>
              </div>
            </div>
            <div className="w-100">
              <Card className="translation-card">
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4}>
                    Fee Type Name
                  </Form.Label>
                  <Col lg={8}>
                    <Field
                      className="form-control fee-type-name-form"
                      type="text"
                      id="feeTypeNameTranslate"
                      name="feeTypeNameTranslate"
                    />
                    <ErrorMessage name="feeTypeNameId" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column lg={4}>
                    Description
                  </Form.Label>
                  <Col lg={8}>
                    <Field
                      className="form-control fee-type-description-form"
                      as="textarea"
                      rows={3}
                      id="descriptionTranslate"
                      name="descriptionTranslate"
                    />
                    <ErrorMessage name="description" />
                  </Col>
                </Form.Group>
              </Card>
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
}
