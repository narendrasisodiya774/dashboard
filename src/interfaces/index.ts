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

export interface ILayoutConfig {
  parentId: string;
  displayText: string;
  displayIndex: number;
  acronym: string;
  id: string;
  type: string;
  jsonConfig?: ILayoutConfig[];
  nodes?: any;
  tenantId: string;
  app: string;
  route: string;
  active: boolean;
}

export interface IOption {
  label: string;
  value: string;
}

export interface ICashflow {
  receivables: number;
  made: number;
  purchases: number;
  totalSales: number;
  overduePayments: number;
  nextPaymentDue: string;
  supplier: number;
  topSellingProduct: string;
}
