import React, { useState, useMemo, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { carsAction } from "../reducers";
import { carColumns } from "../utils/columns";
import {
  SearchContainer,
  AddContainer,
  AddModalContainer,
  TableContainer,
  EditModalContainer,
  SubHeadingContainer
} from "../containers";
import { toastSuccess } from "../utils/toasts";
import styles from "./app.module.scss";

function App() {
  const [car, setCar] = useState({ id: null, brand: "", model: "", year: "" });
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [filter, setFilter] = useState("");

  const cars = useSelector(state => state.cars);

  const memoCars = useMemo(() => cars, [cars]);
  const memoCarsColumns = useMemo(() => carColumns, []);

  const dispatch = useDispatch();

  const clearCar = () => setCar({ id: null, brand: "", model: "", year: "" });

  const handleAdd = (event) => {
    event.preventDefault();
    dispatch(carsAction.addCar(car.brand, car.model, car.year));
    toastSuccess("Car added correctly!");
    setIsAddOpen(false);
    clearCar();
  };

  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(carsAction.deleteCar(car.id));
    toastSuccess("Car deleted correctly!");
    setIsEditOpen(false);
    clearCar();
  };

  const handleEdit = (event) => {
    event.preventDefault();
    dispatch(carsAction.editCar(car.id, car.brand, car.model, car.year));
    toastSuccess("Car edited correctly!");
    setIsEditOpen(false);
    clearCar();
  };

  return (
    <div className={styles.app}>
      {isAddOpen &&
        <AddModalContainer
          handleClose={() => {
            setIsAddOpen(false);
            clearCar()
          }}
          car={car}
          setCar={setCar}
          handleAdd={handleAdd}
        />
      }
      {isEditOpen &&
        <EditModalContainer
          handleClose={() => {
            setIsEditOpen(false);
            clearCar();
          }}
          car={car}
          setCar={setCar}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      }
      <div className={styles.app__container}>
        {!cars.length ?
          <SubHeadingContainer message="Table is empty..." /> :
          <Fragment>
            <SearchContainer
              value={filter}
              setValue={setFilter}
            />
            <TableContainer
              data={memoCars}
              columns={memoCarsColumns}
              filterColumn={"model"}
              filter={filter}
              setCar={setCar}
              setIsEditModalOpen={setIsEditOpen}
            />
          </Fragment>
        }
        <AddContainer
          setValue={setIsAddOpen}
        />
      </div>
    </div >
  );
}

export default App;