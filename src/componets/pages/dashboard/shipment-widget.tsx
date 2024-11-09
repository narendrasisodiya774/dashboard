import Image from "next/image";
import {
  AnalyticsTruck,
  Arrow,
  PointerBlueFilled,
  PointerGreen,
} from "~/assets/icons";

export default function ShipmentWidget() {
  return (
    <div className="bg-[#F7F9FB] rounded-lg p-4 mb-3">
      <div className="flex justify-between mb-2">
        <div>
          <h1 className="text-[10px] opacity-60">Shipment ID </h1>
          <h1 className="text-base font-bold">#003455MNP</h1>
        </div>
        <div>
          <Image src={AnalyticsTruck} alt="truck" />
        </div>
      </div>
      <div className="flex gap-3 text-[11px] items-center">
        <div className="flex gap-1">
          <Image src={PointerGreen} alt="location" />
          <h1>source</h1>
        </div>
        <div>
          <Image src={Arrow} alt="arrow" />
        </div>
        <div className="flex gap-1">
          <Image src={PointerBlueFilled} alt="location" />
          <h1>destination</h1>
        </div>
      </div>
    </div>
  );
}
