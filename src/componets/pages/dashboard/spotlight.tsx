"use client";
import CardHeaderElement from "~/componets/common/card-header-element";
import CoolCard from "~/componets/common/cool-card";
import SupplierClientList from "./supplier-client-list";
import TopSoldItems from "./top-sold-items";
import TopPurchasedItems from "./top-purchased-items";
import CoolToggleSwitch from "~/componets/common/cool-toggle-switch";
import { useState } from "react";
import {
  CUSTOMER_DATA,
  TOP_PURCHASED_ITEMS,
  TOP_SOLD_ITEMS,
} from "~/utils/constants";
import Image from "next/image";
import { SpotlightMap } from "~/assets/images";

export interface IItemsProps {
  rank: string;
  category: string;
  amount: number;
  unitsSold: number;
}

export default function Spotlight() {
  const [soldItemToggle, setSoldItemToggle] = useState("vol.");
  const [purchasedItemToggle, setPurchasedItemToggle] = useState("value");
  const [suppClientToggle, setSuppClientToggle] = useState<
    "clients" | "suppliers"
  >("clients");

  const handleSoldItemToggle = (value: string) => {
    setSoldItemToggle(value);
  };

  const handlePurchasedItemToggle = (value: string) => {
    setPurchasedItemToggle(value);
  };

  const handleSuppClientToggle = (value: string) => {
    if (value === "clients" || value === "suppliers") {
      setSuppClientToggle(value as "clients" | "suppliers");
    }
  };

  return (
    <CoolCard classNames="overflow-auto">
      <div>
        <div className="">
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="lg:w-1/2 w-full mb-4">
              <CardHeaderElement
                title="Spotlight"
                options={[{ label: "All Regions", value: "all" }]}
                value="all"
              />
              <div>
                <Image src={SpotlightMap} alt="spotlight" />
              </div>
            </div>
            <div className="lg:w-1/2 w-full flex flex-col gap-3 md:flex-row ">
              <div className="flex flex-1 ">
                <div className="h-full border-l border-[#000000] hidden md:hidden lg:block opacity-20 mx-4" />
                <div className="w-full">
                  <CardHeaderElement
                    title="Top Items Sold"
                    toggleOptions={["value", "vol."]}
                    selectedToggle={soldItemToggle}
                    onSelect={handleSoldItemToggle}
                  />
                  <TopSoldItems data={TOP_SOLD_ITEMS} toggle={soldItemToggle} />
                </div>
              </div>
              <div className="flex  flex-1">
                <div className="h-full border-l border-[#000000] hidden md:block opacity-20 mx-4" />
                <div className="w-full">
                  <CardHeaderElement
                    title="Top Items Purchased"
                    toggleOptions={["vol.", "value"]}
                    selectedToggle={purchasedItemToggle}
                    onSelect={handlePurchasedItemToggle}
                  />
                  <TopPurchasedItems
                    data={TOP_PURCHASED_ITEMS}
                    toggle={purchasedItemToggle}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <CoolToggleSwitch
            options={["suppliers", "clients"]}
            selected={suppClientToggle}
            onSelect={handleSuppClientToggle}
          />
          <SupplierClientList data={CUSTOMER_DATA[suppClientToggle]} />
        </div>
      </div>
    </CoolCard>
  );
}
