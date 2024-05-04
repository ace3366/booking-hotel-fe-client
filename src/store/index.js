import { configureStore } from "@reduxjs/toolkit";
import validationReducer from "./validate";
import loginReducer from "./login";
const store = configureStore({
  reducer: { validate: validationReducer, login: loginReducer },
});

export default store;
