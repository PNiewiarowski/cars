const carsAction = {
  addCar: function (brand, model, year) {
    return {
      type: "ADD_CAR",
      payload: { brand, model, year },
    };
  },
  deleteCar: function (id) {
    return {
      type: "DELETE_CAR",
      payload: { id },
    };
  },
  editCar: function (id, brand, model, year) {
    return {
      type: "EDIT_CAR",
      payload: { id, brand, model, year },
    };
  },
};

export default carsAction;