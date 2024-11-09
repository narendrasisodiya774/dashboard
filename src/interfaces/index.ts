export interface ISuppClientData {
  rank: string;
  name: string;
  value: number;
  winLose: number;
  orders: number;
}

export interface ICustomerData {
  suppliers: ISuppClientData[];
  clients: ISuppClientData[];
}
