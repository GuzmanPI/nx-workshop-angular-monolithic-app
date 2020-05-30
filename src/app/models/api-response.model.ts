import { User } from './user.model';
import { Address } from './address.model';
import { JobPosition } from './job-position.model';
import { Transaction } from './transaction.model';

export interface ApiResponse {
  copyRight: string;
  statusCode: number;
  data: User | Address | JobPosition | Transaction | User[] | Transaction[];
}
