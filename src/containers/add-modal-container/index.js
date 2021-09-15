import React from "react";
import { createPortal } from "react-dom";
import { BsPlus } from "react-icons/bs";
import { AiFillTrademarkCircle, AiFillCalendar, AiFillCar } from "react-icons/ai";
import { Form, Modal } from "../../components";

function AddModalContainer({ handleAdd, handleClose, car, setCar }) {
  return createPortal(
    <Modal.Container>
      <Modal>
        <Modal.Navbar>
          <Modal.Title>Dodaj pojazd</Modal.Title>
          <Modal.Close onClick={handleClose} />
        </Modal.Navbar>
        <Form onSubmit={handleAdd}>
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
            <BsPlus />
          </Form.Button>
        </Form>
      </Modal>
    </Modal.Container >,
    document.getElementById("root-modal")
  );
}

export default AddModalContainer;