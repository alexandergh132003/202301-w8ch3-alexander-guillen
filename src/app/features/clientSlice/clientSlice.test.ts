import { alexanderClient } from "../../../data/clients";
import { ClientState, PersonalInfo } from "../../../types";
import {
  clientInitialState,
  clientReducer,
  loadClientActionCreator,
  setPersonalInfoActionCreator,
} from "./clientSlice";

describe("Given client reducer function", () => {
  describe("When it receives a loadClientActionCreator which is called with alexander client", () => {
    test("Then it should return alexander client", () => {
      const alexander: ClientState = { ...alexanderClient };
      const expectedClient: ClientState = {
        ...alexanderClient,
      };

      const resultedClient = clientReducer(
        clientInitialState,
        loadClientActionCreator(alexander)
      );

      expect(expectedClient).toStrictEqual(resultedClient);
    });
  });

  describe("When it receives a setPersonalInfoActionCreator wich is called with alexander info", () => {
    test("Then is should return a client with alexander info included", () => {
      const alexanderInfo: PersonalInfo = {
        name: "Alexander",
        age: 19,
        email: "alexander.guillen@example.com",
        address: "Aprestadora 14 St",
        telephoneNumber: "662930221",
      };
      const expectedClient: ClientState = {
        ...clientInitialState,
        personalInfo: alexanderInfo,
      };

      const resultedClient = clientReducer(
        clientInitialState,
        setPersonalInfoActionCreator(alexanderInfo)
      );

      expect(expectedClient).toStrictEqual(resultedClient);
    });
  });
});
