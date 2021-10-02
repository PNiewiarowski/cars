import React from "react";
import { createPortal } from "react-dom";
import { AiFillCar, AiFillTrademarkCircle, AiFillCalendar, AiFillSave, AiFillDelete } from "react-icons/ai";
import { Form, Modal } from "../../components";

function EditModalContainer({ handleEdit, handleDelete, handleClose, car, setCar }) {
  return createPortal(
    <Modal.Container>
      <Modal>
        <Modal.Navbar>
          <Modal.Title>Edit car [ {car.id} ] </Modal.Title>
          <Modal.Close onClick={handleClose} />
        </Modal.Navbar>
        <Form onSubmit={handleEdit}>
          <Form.InputText
            icon={<AiFillTrademarkCircle />}
            placeholder="Brand..."
            value={car.brand}
            onChange={(event) => setCar({ ...car, brand: event.target.value })}
            required
          />
          <Form.InputText
            icon={<AiFillCar />}
            placeholder="Model..."
            value={car.model}
            onChange={(event) => setCar({ ...car, model: event.target.value })}
            required
          />
          <Form.InputText
            icon={<AiFillCalendar />}
            placeholder="Year..."
            type="number"
            value={car.year}
            onChange={(event) => setCar({ ...car, year: event.target.value })}
            max="2022"
            min="1900"
            required
          />
          <Form.Button variant="green">
            <AiFillSave />
          </Form.Button>
        </Form>
        <Form onSubmit={handleDelete}>
          <Form.Button variant="red">
            <AiFillDelete />
          </Form.Button>
        </Form>
      </Modal>
    </Modal.Container >,
    document.getElementById("root-modal")
  );
}

export default EditModalContainer;