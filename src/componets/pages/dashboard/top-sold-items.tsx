import { formatCurrencyWithStyle } from "~/utils/controlles";
import { IItemsProps } from "./spotlight";

const TopSoldItems: React.FC<{ data: IItemsProps[]; toggle: string }> = ({
  data,
  toggle,
}) => {
  return (
    <div className="w-full mt-3">
      {data.map((item: IItemsProps, index: number) => (
        <div
          key={index}
          className="flex justify-between items-center rounded-lg bg-[#F7F9FB] py-3 px-3 mb-3"
        >
          <span>
            <span className="font-bold text-[14px] mr-2 ">{item.rank}</span>
            <span className="text-[14px]">{item.category}</span>
          </span>
          {toggle === "value" ? (
            <span className="font-bold text-[14px]">
              {formatCurrencyWithStyle(item.amount)}
            </span>
          ) : (
            <span className="text-[14px] border py-[1px] px-0.5 border-[#E5E5E5] font-semibold rounded-lg ">
              {item.unitsSold} Units
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default TopSoldItems;
