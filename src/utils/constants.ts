import { ICustomerData } from "~/interfaces";

export const LAYOUT_CONFIG = [
  {
    parentId: "ROOT",
    displayText: "Dashboard",
    displayIndex: 1,
    acronym: "DB",
    id: "DB",
    type: "MAIN_MENU",
    //e.g. json structure
    jsonConfig: [
      {
        componentId: "component-id",
        type: "component-type",
        properties: {
          chartJson: {},
        },
        query: {}, //query structure for query requests e.g. 'gql'
      },
    ],
    tenantId: "APP_RS_ORU_LTD",
    app: "dashboard",
    route: "/dashboard",
    active: true,
  },
  {
    parentId: "ROOT",
    displayText: "Contacts Book",
    displayIndex: 2,
    acronym: "CB",
    id: "CB",
    type: "MAIN_MENU",
    jsonConfig: null,
    tenantId: "APP_RS_ORU_LTD",
    app: "dashboard",
    route: "/contacts-book",
    active: true,
  },
  {
    parentId: "ROOT",
    displayText: "Order",
    displayIndex: 3,
    acronym: "OR",
    id: "OR",
    type: "MAIN_MENU",
    jsonConfig: null,
    tenantId: "APP_RS_ORU_LTD",
    app: "dashboard",
    route: "/orders",
    active: true,
  },
  {
    parentId: "ROOT",
    displayText: "Setting One",
    displayIndex: 4,
    acronym: "SO",
    id: "SO",
    type: "MAIN_MENU",
    jsonConfig: null,
    tenantId: "APP_RS_ORU_LTD",
    app: "dashboard",
    route: "/setting-one",
    active: true,
  },
  {
    parentId: "ROOT",
    displayText: "Document Line",
    displayIndex: 5,
    acronym: "DL",
    id: "DL",
    type: "MAIN_MENU",
    jsonConfig: null,
    tenantId: "APP_RS_ORU_LTD",
    app: "dashboard",
    route: "/document-line",
    active: true,
  },
  {
    parentId: "ROOT",
    displayText: "Finance",
    displayIndex: 6,
    acronym: "FN",
    id: "FN",
    type: "MAIN_MENU",
    jsonConfig: null,
    tenantId: "APP_RS_ORU_LTD",
    app: "dashboard",
    route: "/finance",
    active: true,
  },
  {
    parentId: "ROOT",
    displayText: "Table Report",
    displayIndex: 7,
    acronym: "TR",
    id: "TR",
    type: "MAIN_MENU",
    jsonConfig: null,
    tenantId: "APP_RS_ORU_LTD",
    app: "dashboard",
    route: "/table-report",
    active: true,
  },
  {
    parentId: "ROOT",
    displayText: "Weixin Market",
    displayIndex: 8,
    acronym: "WM",
    id: "WM",
    type: "MAIN_MENU",
    jsonConfig: null,
    tenantId: "APP_RS_ORU_LTD",
    app: "dashboard",
    route: "/weixin-market",
    active: true,
  },
  {
    parentId: "ROOT",
    displayText: "Integration Instructions",
    displayIndex: 9,
    acronym: "II",
    id: "II",
    type: "MAIN_MENU",
    jsonConfig: null,
    tenantId: "APP_RS_ORU_LTD",
    app: "dashboard",
    route: "/integration-instructions",
    active: true,
  },
];

export const LOGIN_INFO = {
  tenantId: "APP_RS_ORU_LTD",
  name: "Rahul S",
  type: "Customer",
};

export const ANALYTIC_DATA = {
  customer: [
    { name: "Rahul", type: "Customer", organisation: "ORUE PVT. LTD." },
  ],
  supplier: [{ name: "", type: "", organisation: "" }],
  name: "",
  type: "",
  tenantId: "",
  organisation: "",
  payment: {
    receivables: 1240000,
    made: 950000,
    purchases: 1520000,
    totalSales: 1800000,
    overduePayments: 140000,
    nextPaymentDue: "1 Week",
    supplier: 6,
    topSellingProduct: "ELECTRONICS",
  },
};

export const SHIPMENT_DATA = {
  "Shipment ID": "#0124BCD",
  Category: "Electronics",
  "Total Weight": "329 kg",
  Destination: "Bangalore",
  "Est. Arrival": "2 Hrs",
};

export const TOP_SOLD_ITEMS = [
  {
    rank: "#1",
    category: "Automotive Parts",
    amount: 227459,
    unitsSold: 850,
  },
  { rank: "#2", category: "Steel Sheets", amount: 227459, unitsSold: 430 },
  {
    rank: "#3",
    category: "Electronic Parts",
    amount: 227459,
    unitsSold: 300,
  },
  {
    rank: "#4",
    category: "Plastic Materials",
    amount: 227459,
    unitsSold: 400,
  },
  {
    rank: "#5",
    category: "Office Equipments",
    amount: 227459,
    unitsSold: 150,
  },
];

export const TOP_PURCHASED_ITEMS = [
  {
    rank: "#1",
    category: "Office Equipments",
    amount: 227459,
    unitsSold: 150,
  },
  { rank: "#2", category: "Steel Sheets", amount: 227459, unitsSold: 150 },
  {
    rank: "#3",
    category: "Plastic Materials",
    amount: 227459,
    unitsSold: 150,
  },
  {
    rank: "#4",
    category: "Electronic Parts",
    amount: 227459,
    unitsSold: 150,
  },
  {
    rank: "#5",
    category: "Automotive Parts",
    amount: 227459,
    unitsSold: 150,
  },
];

export const CUSTOMER_DATA: ICustomerData = {
  suppliers: [
    {
      rank: "#1",
      name: "Rahul Sethi",
      value: 209632,
      winLose: 39,
      orders: 118,
    },
    {
      rank: "#2",
      name: "Rahul Sethi",
      value: 209632,
      winLose: 39,
      orders: 118,
    },
    {
      rank: "#3",
      name: "Rahul Sethi",
      value: 209632,
      winLose: 39,
      orders: 118,
    },
    {
      rank: "#4",
      name: "Rahul Sethi",
      value: 209632,
      winLose: 39,
      orders: 118,
    },
    {
      rank: "#5",
      name: "Rahul Sethi",
      value: 209632,
      winLose: 39,
      orders: 118,
    },
  ],
  clients: [
    {
      rank: "#1",
      name: "Amit Sethi",
      value: 209632,
      winLose: 39,
      orders: 118,
    },
    {
      rank: "#2",
      name: "Amit Sethi",
      value: 209632,
      winLose: 39,
      orders: 118,
    },
    {
      rank: "#3",
      name: "Amit Sethi",
      value: 209632,
      winLose: 39,
      orders: 118,
    },
    {
      rank: "#4",
      name: "Amit Sethi",
      value: 209632,
      winLose: 39,
      orders: 118,
    },
    {
      rank: "#5",
      name: "Amit Sethi",
      value: 209632,
      winLose: 39,
      orders: 118,
    },
  ],
};
