import { ISuppClientData } from "~/interfaces";
import { formatCurrencyWithStyle } from "~/utils/controlles";
interface ISuppClientProps {
  data: ISuppClientData[];
}
const SupplierClientList: React.FC<ISuppClientProps> = ({ data }) => {
  return (
    <div className="w-full mt-3">
      {data.map((item: ISuppClientData, index: number) => (
        <div
          key={index}
          className="flex flex-1 justify-between items-center rounded-lg bg-[#F7F9FB] py-3 px-3 mb-3"
        >
          <span className="font-bold">
            <span className="text-[14px] mr-4">{item.rank}</span>
            <span className="text-[14px]">{item.name}</span>
          </span>
          <span className="text-[14px]">
            {formatCurrencyWithStyle(item.value)}
          </span>
          <span className="text-[14px]">{item.winLose}% Win/Lose</span>
          <span className="text-[14px]">{item.orders}</span>
        </div>
      ))}
    </div>
  );
};

export default SupplierClientList;
