import React from "react";
import { createPortal } from "react-dom";
import { AiFillCar, AiFillTrademarkCircle, AiFillCalendar, AiFillSave, AiFillDelete } from "react-icons/ai";
import { Form, Modal } from "../../components";

function EditModalLayout({ handleEdit, handleDelete, handleClose, car, setCar }) {
  return createPortal(
    <Modal.Container>
      <Modal>
        <Modal.Navbar>
          <Modal.Title>Edytuj pojazd nr. {car.id} </Modal.Title>
          <Modal.Close onClick={handleClose} />
        </Modal.Navbar>
        <Form onSubmit={handleEdit}>
          <Form.InputText
            icon={<AiFillTrademarkCircle />}
            placeholder="Marka pojazdu..."
            value={car.brand}
            onChange={(event) => setCar({ ...car, brand: event.target.value })}
            required
          />
          <Form.InputText
            icon={<AiFillCar />}
            placeholder="Model pojazdu..."
            value={car.model}
            onChange={(event) => setCar({ ...car, model: event.target.value })}
            required
          />
          <Form.InputText
            icon={<AiFillCalendar />}
            placeholder="Rok produkcji..."
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

export default EditModalLayout;