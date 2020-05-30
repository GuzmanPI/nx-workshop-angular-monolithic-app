export interface Address {
  zipCode: number;
  city: string;
  streetAddress: string;
  county: string;
  state: string;
  country: string;
  geo: { lat: number; lng: number };
}
