import { ClientState } from "../types";

export const alexanderClient: ClientState = {
  personalInfo: {
    age: 25,
    address: "Aprestadora 14 St",
    email: "alexander.guillen@example.com",
    name: "Alexander Guillén",
    telephoneNumber: "555-555-1212",
  },
  customerInfo: {
    billingAddress: "Aprestadora 14 St",
    deliveryAddress: "Aprestadora 14 St",
    orders: [],
  },
  isLogged: true,
};
