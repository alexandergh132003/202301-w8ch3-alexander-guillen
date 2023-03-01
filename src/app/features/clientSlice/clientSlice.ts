import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClientState, PersonalInfo } from "../../../types";

export const clientInitialState: ClientState = {
  personalInfo: {
    age: 0,
    address: "",
    email: "",
    name: "",
    telephoneNumber: "",
  },
  customerInfo: {
    billingAddress: "",
    deliveryAddress: "",
    orders: [],
  },
  isLogged: false,
};

const clientSlice = createSlice({
  name: "client",
  initialState: clientInitialState,
  reducers: {
    loadClient: (currentState, action: PayloadAction<ClientState>) => ({
      ...action.payload,
    }),
    setPersonalInfo: (currentState, action: PayloadAction<PersonalInfo>) => ({
      ...currentState,
      personalInfo: action.payload,
    }),
  },
});

export const {
  loadClient: loadClientActionCreator,
  setPersonalInfo: setPersonalInfoActionCreator,
} = clientSlice.actions;
export const clientReducer = clientSlice.reducer;
