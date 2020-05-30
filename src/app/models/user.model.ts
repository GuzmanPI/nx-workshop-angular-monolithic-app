import { Address } from './address.model';

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  phoneNumber: string;
  address: Address;
  position: string;
  salesHistory: { mine: number[]; team: number[] };
}
