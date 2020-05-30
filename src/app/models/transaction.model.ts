export interface Transaction {
  _id: string;
  amount: number;
  date: Date;
  business: string;
  name: string;
  type: string;
  account: number;
}
