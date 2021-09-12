const initState = [];

function carsReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_CAR":
      return [...state, {
        id: state.length ? state[state.length - 1].id + 1 : 1,
        brand: action.payload.brand,
        model: action.payload.model,
        year: action.payload.year,
      }];
    case "EDIT_CAR":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          item.brand = action.payload.brand;
          item.model = action.payload.model;
          item.year = action.payload.year;
        }

        return item;
      });
    case "DELETE_CAR":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}

export default carsReducer;