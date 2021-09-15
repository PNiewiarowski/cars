import React from "react";
import { BsPlus } from "react-icons/bs";
import { Form } from "../../components";

function AddContainer({ setValue }) {
  return (
    <Form onSubmit={(event) => event.preventDefault()} >
      <Form.Button variant="green" onClick={() => setValue(true)}>
        <BsPlus />
      </Form.Button>
    </Form >
  );
}

export default AddContainer;