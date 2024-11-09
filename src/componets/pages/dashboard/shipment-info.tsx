// components/ShipmentInfo.tsx
import React from "react";

type ShipmentInfoProps = {
  data: { [key: string]: string | number };
};

const ShipmentInfo: React.FC<ShipmentInfoProps> = ({ data }) => {
  return (
    <div className="flex items-center">
      {Object.entries(data).map(([key, value], index) => (
        <div key={key} className="flex items-center">
          <div>
            <h1 className="text-xs opacity-30">{key}</h1>
            <h1 className="text-sm font-semibold">{value}</h1>
          </div>

          {index < Object.entries(data).length - 1 && (
            <div className="h-12 border-l border-[#000000] opacity-20 mx-4" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ShipmentInfo;
