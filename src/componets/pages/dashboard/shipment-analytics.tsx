"use client";
import Image from "next/image";
import { Filter } from "~/assets/icons";
import { TrackingMap } from "~/assets/images";
import CoolCard from "~/componets/common/cool-card";
import ShipmentWidget from "./shipment-widget";
import ShipmentInfo from "./shipment-info";
import { SHIPMENT_DATA } from "~/utils/constants";

export default function ShipmentAnalytics() {
  return (
    <div className="h-full">
      <CoolCard>
        <div className="w-full h-full flex flex-wrap md:flex-nowrap gap-9">
          <div className="w-full md:w-1/3 h-auto md:h-full">
            <div className="flex justify-between items-center mb-4">
              <h1 className="tex-[16px] font-bold">Shipment Analytics</h1>
              <div className="flex items-center border border-cool-light-3 bg-cool-light cursor-pointer py-1 px-2 rounded-lg">
                <Image src={Filter} alt="filter" />
                <span>FILTERS </span>
              </div>
            </div>
            <div className="overflow-auto custom-scroll h-[80%]">
              <ShipmentWidget />
              <ShipmentWidget />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="flex px-2 py-1 mb-3  border h-[35px] border-cool-light-2 bg-cool-light rounded-full focus-visible:outline-none w-fit">
              <h1 className="text-center opacity-60">ID: #003455MNP</h1>
            </div>
            <div className="mb-3">
              <Image
                src={TrackingMap}
                alt="track"
                objectFit=""
                className="w-full h-auto"
              />
            </div>
            <div>
              <ShipmentInfo data={SHIPMENT_DATA} />
            </div>
          </div>
        </div>
      </CoolCard>
    </div>
  );
}
