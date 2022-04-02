import { Form, InputGroup } from "react-bootstrap";
import { useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <Form.Group>
        <Form.Row>
          <Form.Label column lg={5} htmlFor={field.name}>
            {label}
          </Form.Label>
          <InputGroup>
            <input
              className="form-control shadow-none"
              {...field}
              {...props}
              autoComplete="off"
            />
          </InputGroup>
        </Form.Row>
      </Form.Group>
    </div>
  );
};

export default TextField;
