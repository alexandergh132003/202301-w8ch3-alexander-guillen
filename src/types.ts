export enum Status {
  Pending,
  Paid,
  Shipped,
  Delivered,
  Cancelled,
}

interface DeliveryAddress {
  deliveryAddress: string;
}

interface CookUtensil {
  name: string;
  price: string;
  description: string;
  isInStock: boolean;
}

interface Order extends CookUtensil, DeliveryAddress {
  id: number;
  status: Status;
}

export interface PersonalInfo {
  name: string;
  email: string;
  address: string;
  age: number;
  telephoneNumber: string;
}

export interface CustomerInfo extends DeliveryAddress {
  billingAddress: string;
  orders: Order[];
}

export interface ClientState {
  personalInfo: PersonalInfo;
  customerInfo: CustomerInfo;
  isLogged: boolean;
}
