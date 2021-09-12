import React, { useState, useMemo, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { carsAction } from "../reducers";
import { carColumns } from "../utils/columns";
import {
  SearchLayout,
  AddLayout,
  AddModalLayout,
  TableLayout,
  EditModalLayout,
  SubHeadingLayout
} from "../layouts";
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
    toastSuccess("Udało się dodać pojazd do tabeli!");
    setIsAddOpen(false);
    clearCar();
  };

  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(carsAction.deleteCar(car.id));
    toastSuccess("Udało się usunąć pojazd z tabeli!");
    setIsEditOpen(false);
    clearCar();
  };

  const handleEdit = (event) => {
    event.preventDefault();
    dispatch(carsAction.editCar(car.id, car.brand, car.model, car.year));
    toastSuccess("Udało się edytować pojazd!");
    setIsEditOpen(false);
    clearCar();
  };

  return (
    <div className={styles.app}>
      {isAddOpen &&
        <AddModalLayout
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
        <EditModalLayout
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
          <SubHeadingLayout message="Nie ma żadnych pojazdów w tabeli" /> :
          <Fragment>
            <SearchLayout
              value={filter}
              setValue={setFilter}
            />
            <TableLayout
              data={memoCars}
              columns={memoCarsColumns}
              filterColumn={"model"}
              filter={filter}
              setCar={setCar}
              setIsEditModalOpen={setIsEditOpen}
            />
          </Fragment>
        }
        <AddLayout
          setValue={setIsAddOpen}
        />
      </div>
    </div >
  );
}

export default App;