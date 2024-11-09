import { ANALYTIC_DATA } from "~/utils/constants";
import CashflowWidget from "./cashflow-widgets";
import InventoryChart from "./inventory-chart";
import ShipmentAnalytics from "./shipment-analytics";
import Spotlight from "./spotlight";

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

export default function AnalyticsPanel() {
  return (
    <div className="pt-6 w-full border-t border-[#E5E5E5]">
      <CashflowWidget data={ANALYTIC_DATA.payment} />
      <div className="w-full px-4 mb-4 flex flex-wrap xl:flex-nowrap gap-4">
        <div className="w-full xl:w-1/3">
          <InventoryChart />
        </div>
        <div className="w-full xl:w-2/3">
          <ShipmentAnalytics />
        </div>
      </div>
      <div className="w-full px-4 mb-4 h-[808px] md:h-[720px]">
        <Spotlight />
      </div>
    </div>
  );
}
