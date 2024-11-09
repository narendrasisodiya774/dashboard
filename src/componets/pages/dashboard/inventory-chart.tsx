"use client";
import { useEffect, useState } from "react";
import CardHeaderElement from "~/componets/common/card-header-element";
import BarChart from "~/componets/common/chart";
import CoolCard from "~/componets/common/cool-card";
import CoolRadioToggle from "~/componets/common/cool-radio-toggle";

const data = {
  labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Sales",
      data: [7, 8, 15, 6, 12, 10, 6],
      backgroundColor: "#4F45E4",
      borderRadius: {
        topLeft: 4,
        topRight: 4,
      },
      barThickness: 16,
    },
    {
      label: "Purchases",
      data: [5, 6, 8, 4, 9, 8, 5],
      backgroundColor: "#D6D4F5",
      borderRadius: {
        topLeft: 4,
        topRight: 4,
      },
      barThickness: 16,
    },
  ],
};

export default function InventoryChart() {
  const [rangeToggle, setRangeToggle] = useState("weekly");
  const [radioToggle, setRadioToggle] = useState("sales");
  const [isLoading, setIsLoading] = useState(true);

  // Loadind state can be updated based inn API calls
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Simulating a 2-second for default testing
    };

    fetchData();
  }, []);

  const handleSelect = (value: string) => {
    setRangeToggle(value);
  };

  const handleRadio = (value: string) => {
    setRadioToggle(value);
  };

  return (
    <div className="h-full">
      <CoolCard>
        <CardHeaderElement
          title="Inventory Overview"
          subtitle="In-Stock Products: 3,200 Units"
          toggleOptions={["daily", "weekly"]}
          selectedToggle={rangeToggle}
          onSelect={handleSelect}
        />
        <div className="min-h-[310px] xl:min-h-[calc(100%-72px)] relative">
          <BarChart data={data} loading={isLoading} />
        </div>
        <div className="flex justify-end">
          <CoolRadioToggle
            options={[
              { label: "Sales", value: "sales" },
              { label: "Purchases", value: "purchases" },
            ]}
            selected={radioToggle}
            onSelect={handleRadio}
          />
        </div>
      </CoolCard>
    </div>
  );
}
