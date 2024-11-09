import Image from "next/image";
import { Bag, Cash, ChartLine, ShoppingCart } from "~/assets/icons";
import CoolCard from "~/componets/common/cool-card";
import { ICashflow } from "./analytics-panel";
import FormatValueWithCurrency from "~/componets/common/FormatValueWithCurrency";
import FormatValueInPercent from "~/componets/common/FormatValueInPercent";
import CoolIcon from "~/componets/common/cool-icon";
import { formatCurrencyWithStyle } from "~/utils/controlles";

interface ICashflowProps {
  data: ICashflow;
}

const CashflowPanel: React.FC<ICashflowProps> = ({ data }) => {
  console.log({ data });
  return (
    <div className="w-full grid gap-4 md:grid-cols-2 lg:grid-cols-4 px-4 mb-4">
      <div className="">
        <CoolCard>
          <div className="flex justify-between">
            <div>
              <div className="opacity-50 text-[16px]">Payment Receivables</div>
              <div className="flex gap-1 items-baseline">
                <FormatValueWithCurrency value={data.receivables} curr="INR" />
                <FormatValueInPercent value={3.28} />
              </div>
              <h1 className="uppercase text-[11px] opacity-30 font-semibold">
                Overdue Payments:{" "}
                {formatCurrencyWithStyle(data.overduePayments)}
              </h1>
            </div>
            <CoolIcon classNames="bg-cool-green-0">
              <Image src={Bag} alt="bag" priority />
            </CoolIcon>
          </div>
        </CoolCard>
      </div>
      <div className="">
        <CoolCard>
          <div className="flex justify-between">
            <div>
              <div className="opacity-50 text-[16px]">Payments Made</div>
              <div className="flex gap-1 items-baseline">
                <FormatValueWithCurrency value={data.made} curr="INR" />
              </div>
              <h1 className="uppercase text-[11px] opacity-30 font-semibold">
                Next Payment Due: {data.nextPaymentDue}
              </h1>
            </div>
            <CoolIcon classNames="bg-cool-blue-light">
              <Image src={Cash} alt="cash" priority />
            </CoolIcon>
          </div>
        </CoolCard>
      </div>
      <div className="flex-1 ">
        <CoolCard>
          <div className="flex justify-between">
            <div>
              <div className="opacity-50 text-[16px]">Total Purchases</div>
              <div className="flex gap-1 items-baseline">
                <FormatValueWithCurrency value={data.purchases} curr="INR" />
                <FormatValueInPercent value={3.28} />
              </div>
              <h1 className="uppercase text-[11px] opacity-30 font-semibold">
                Suppliers: {data.supplier}
              </h1>
            </div>
            <CoolIcon classNames="bg-cool-yello-0">
              <Image src={ShoppingCart} alt="cart" priority />
            </CoolIcon>
          </div>
        </CoolCard>
      </div>
      <div className="flex-1 ">
        <CoolCard>
          <div className="flex justify-between">
            <div>
              <div className="opacity-50 text-[16px]">Total Sales</div>
              <div className="flex gap-1 items-baseline">
                <FormatValueWithCurrency value={data.totalSales} curr="INR" />
                <FormatValueInPercent value={-3} />
              </div>
              <h1 className="uppercase text-[11px] opacity-30 font-semibold">
                Top Selling Product: {data.topSellingProduct}
              </h1>
            </div>
            <CoolIcon classNames="bg-cool-blue-light">
              <Image src={ChartLine} alt="chart" priority />
            </CoolIcon>
          </div>
        </CoolCard>
      </div>
    </div>
  );
};
export default CashflowPanel;
